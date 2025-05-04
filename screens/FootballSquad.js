import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Button} from "react-native";
import { CustomButton } from "../components";
import { Styles } from "../styles";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";

const API_URL = "https://ce93-147-83-201-130.ngrok-free.app";

const FootballSquad = ({route, navigation}) => {
  const [jugadores, setJugadores] = useState([]);

  // Obtenemos el tipo de convocatoria de los parámetros de la navegación
  const { tipoConvocatoria, fechaEvento } = route.params;

  console.log(fechaEvento);

  console.log(tipoConvocatoria);

  useEffect(() => {
    fetch(`${API_URL}/players`)
      .then((res) => res.json())
      .then((data) => {
        const players = data.rows.map((player) => ({
          ...player,
          isSelected: false,
        }));
        setJugadores(players);
      })
      .catch((err) => console.error(err));
  }, []);
  
  // Función para enviar el mensaje de Telegram
  const sendTelegramMessage = async () => {
    const selected = jugadores.filter(j => j.isSelected);
    const names = selected.map(j => j.Nombre).join(", ") || "Ninguno";

    const TOKEN = '7759168539:AAHKy4JK6BysQC3BEaXfjNLWGYCo-3ChWOU';
    const CHAT_ID = '1161434961';
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let text = '';

    // Verificamos el tipo de convocatoria y preparamos el mensaje
    if (tipoConvocatoria === 'entrenamiento') {
      text = `📅 *Entrenamiento confirmado*\n\n💪 Nos vemos en el campo!`;
    } else if (tipoConvocatoria === 'partido') {
      text = `⚽ *Convocatoria para el partido*\n\n👥 *Jugadores convocados:*\n${names}`;
    }

    // Definimos los botones "Sí" y "No" para la confirmación de asistencia
    const replyMarkup = {
      inline_keyboard: [
        [
          { text: 'Sí', callback_data: 'yes' },
          { text: 'No', callback_data: 'no' }
        ]
      ]
    };

    // Enviar el mensaje a Telegram con los botones de confirmación
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "Markdown",
          reply_markup: replyMarkup, // Añadimos los botones
        }),
      });
      console.log('Mensaje enviado a Telegram correctamente.');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al enviar el mensaje a Telegram:', error);
    }
  };

  const toggleSelection = (index) => {
    setJugadores((prev) =>
      prev.map((player, i) =>
        i === index ? { ...player, isSelected: !player.isSelected } : player
      )
    );
  };

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>Jugadores:</Text>
      {jugadores.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => toggleSelection(index)}
          style={{
            padding: 16,
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 10,
            backgroundColor: item.isSelected ? "#90ee90" : "#f0f0f0", // verde si seleccionado
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.Nombre}</Text>
        </TouchableOpacity>
      ))}

      <View style={Styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }} onPress={sendTelegramMessage}>Confirmar convocatoria</Text>
      </View>
    </ScrollView>
  );
};

export default FootballSquad;
