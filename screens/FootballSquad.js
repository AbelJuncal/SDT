
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity} from'react-native';
import { Styles, Colors } from '../styles';
import { ScrollView } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";

const API_URL = 'https://21dc-147-83-201-130.ngrok-free.app';

const FootballSquad = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/players`)
      .then((res) => res.json())
      .then((data) => {
        const players = data.rows.map(player => ({
          ...player,
          isSelected: false,
        }));
        setJugadores(players);
      })
      .catch(err => console.error(err));
  }, []);

  const handleCheckboxChange = (index) => {
    const newPlayers = [...jugadores];
    newPlayers[index].isSelected = !newPlayers[index].isSelected;
    setJugadores(newPlayers);
  };

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>Jugadores:</Text>
      {jugadores.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={Styles.button}
          onPress={() => handleCheckboxChange(index)}
          activeOpacity={0.7}
        >
          <Text style={Styles.buttonText}>{item.Nombre}</Text>
          <CheckBox
            value={item.isSelected}
            onValueChange={() => handleCheckboxChange(index)}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FootballSquad;
