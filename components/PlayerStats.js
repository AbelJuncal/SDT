import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const API_URL = "https://21dc-147-83-201-130.ngrok-free.app";

const PlayerList = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/players`)
      .then((res) => res.json())
      .then((data) => {
        const players = data.rows.map((player) => ({
          ...player,
        }));
        setJugadores(players);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {jugadores.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
          >
              <Text style={styles.text}>{player.Nombre}</Text>
              <Text style={styles.text}>Apellidos: {player.Apellidos}</Text>
              <Text style={styles.text}>Edad: {player.Edad}</Text>
              <Text style={styles.text}>Posición: {player.Posición}</Text>
              <Text style={styles.text}>Partidos Jugados: {player.Partidos_Jugados}</Text>
              <Text style={styles.text}>Minutos: {player.Minutos}</Text>
              <Text style={styles.text}>Goles: {player.Goles}</Text>
              <Text style={styles.text}>Tarjetas Amarillas: {player.Tarjetas_Amarillas}</Text>
              <Text style={styles.text}>Tarjetas Rojas: {player.Tarjetas_Rojas}</Text>
              <Text style={styles.text}>Lesionado: {player.Lesionado ? 'Sí' : 'No'}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFCE33',
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default PlayerList;
