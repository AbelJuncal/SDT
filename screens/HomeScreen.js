import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Styles, Colors } from '../styles'; // Importa los estilos y colores
import Icon from 'react-native-vector-icons/FontAwesome'; // Para los iconos

const HomeScreen = ({navigation}) => {
    return (
      <View style={Styles.container}>
        <ScrollView>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText} onPress={() => navigation.navigate('Calendar')}>Calendario</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText} onPress={() => navigation.navigate('TeamStats')}>Historial da tempada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText} onPress={() => navigation.navigate('PlayerCarrusel')}>Xogadores</Text>
        </TouchableOpacity>

        {/* Cuadrado con las copas */}
        <View style={styles.trophyDisplay}>
        <Text style={{ fontSize: 50 }}>🏆</Text>
        <Text style={{ fontSize: 50 }}>🏆</Text>
        <Text style={{ fontSize: 50 }}>🏆</Text>
        </View>
        </ScrollView>
      </View>
    );
  };

  const styles = StyleSheet.create({
    trophyDisplay: {
      position: 'flex',
      width: '100%',
      height: 120,
      backgroundColor: '#A9F5F2',
      borderRadius: 10,
      marginVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly', // Espacia las copas dentro del cuadro
    },
  });
  
  export default HomeScreen;