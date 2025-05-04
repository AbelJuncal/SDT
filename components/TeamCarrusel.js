import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const API_URL = "https://ce93-147-83-201-130.ngrok-free.app";

const TeamList = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/matches`)
      .then((res) => res.json())
      .then((data) => {
        const players = data.rows.map((player) => ({
          ...player,
        }));
        setJugadores(players);
      })
  }, []);

    const partidos = jugadores.filter(player => player.tipo === 'partido');
    const copa = jugadores.filter(player => player.tipo === 'copa');
    const entrenamientos = jugadores.filter(player => player.tipo === 'entrenamiento');
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          
          {/* Sección de Partidos */}
          <Text style={styles.sectionTitle}>Partidos Liga</Text>
          {partidos.map((player, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.text}>{player.resultado} vs {player.rival} </Text>
              <Text style={styles.text}>{player.hora} - Xogadores participantes {player.asistentes}</Text>
              <Text style={styles.details}>{player.fecha}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.sectionTitle}>Partidos Copa</Text>
          {copa.map((player, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.text}>{player.resultado} vs {player.rival} </Text>
              <Text style={styles.text}>{player.hora} - Xogadores participantes {player.asistentes}</Text>
              <Text style={styles.details}>{player.fecha}</Text>
            </TouchableOpacity>
          ))}
          
          <Text style={styles.sectionTitle}>Adestramentos</Text>
          {entrenamientos.map((player, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.text}>{player.duracion_minutos} minutos - {player.asistentes} participantes</Text>
              <Text style={styles.details}>{player.fecha}</Text>
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
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      color: 'white',
    },
    details: {
      fontSize: 14,
      color: 'gray',
      marginTop: 4,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: 'black',
    },
  });

export default TeamList;