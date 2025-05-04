import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import {Styles} from '../styles';

const { height } = Dimensions.get('window');
const API_URL = "https://1924-147-83-201-130.ngrok-free.app";

const PlayerList = () => {
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {jugadores.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={Styles.button}
          >
              <Text style={Styles.buttonText}>{player.Nombre}</Text>
              <Text style={Styles.buttonText}>Apellidos: {player.Apellidos}</Text>
              <Text style={Styles.buttonText}>Edad: {player.Edad}</Text>
              <Text style={Styles.buttonText}>Posición: {player.Posición}</Text>
              <Text style={Styles.buttonText}>Partidos Jugados: {player.Partidos_Jugados}</Text>
              <Text style={Styles.buttonText}>Minutos: {player.Minutos}</Text>
              <Text style={Styles.buttonText}>Goles: {player.Goles}</Text>
              <Text style={Styles.buttonText}>Tarjetas Amarillas: {player.Tarjetas_Amarillas}</Text>
              <Text style={Styles.buttonText}>Tarjetas Rojas: {player.Tarjetas_Rojas}</Text>
              <Text style={Styles.buttonText}>Lesionado: {player.Lesionado ? 'Sí' : 'No'}</Text>
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
