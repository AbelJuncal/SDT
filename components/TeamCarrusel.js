import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const API_URL = "https://21dc-147-83-201-130.ngrok-free.app";

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
      .catch((err) => console.error(err));
  }, []);

    // Filtrar jugadores por tipo: 'partido' o 'entrenamiento'
    const partidos = jugadores.filter(player => player.tipo === 'partido');
    const entrenamientos = jugadores.filter(player => player.tipo === 'entrenamiento');
  
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          
          {/* Sección de Partidos */}
          <Text style={styles.sectionTitle}>Partidos</Text>
          {partidos.map((player, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.text}>{player.Nombre} - {player.tipo}</Text>
              <Text style={styles.details}>{player.detalles}</Text>
            </TouchableOpacity>
          ))}
          
          {/* Sección de Entrenamientos */}
          <Text style={styles.sectionTitle}>Entrenamientos</Text>
          {entrenamientos.map((player, index) => (
            <TouchableOpacity key={index} style={styles.item}>
              <Text style={styles.text}>{player.Nombre} - {player.tipo}</Text>
              <Text style={styles.details}>{player.detalles}</Text>
            </TouchableOpacity>
          ))}
  
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f0f0f0',
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
    details: {
      fontSize: 14,
      color: 'gray',
      marginTop: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      color: 'black',
    },
  });

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
        
//         {/* Sección de Partidos */}
//         <Text style={styles.sectionTitle}>Partidos</Text>
//         {players.map((player, index) => (
//           <TouchableOpacity key={index} style={styles.item}>
//             <Text style={styles.text}>{player.Nombre} - {player.tipo}</Text>
//             <Text style={styles.details}>{player.detalles}</Text>
//           </TouchableOpacity>
//         ))}
        
//         {/* Sección de Entrenamientos */}
//         <Text style={styles.sectionTitle}>Entrenamientos</Text>
//         {entrenamientos.map((player, index) => (
//           <TouchableOpacity key={index} style={styles.item}>
//             <Text style={styles.text}>{player.Nombre} - {player.tipo}</Text>
//             <Text style={styles.details}>{player.detalles}</Text>
//           </TouchableOpacity>
//         ))}

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#FFCE33',
//   },
//   scrollView: {
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//   },
//   item: {
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 16,
//     color: 'black',
//   },
// });

export default TeamList;