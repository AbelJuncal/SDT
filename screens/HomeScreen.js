import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Styles, Colors } from '../styles'; // Importa los estilos y colores

const HomeScreen = ({navigation}) => {
    return (
      <View style={Styles.container}>
  
        <ScrollView>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText} onPress={() => navigation.navigate('Calendar')}>Calendario</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>Estadísticas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.button}>
            <Text style={Styles.buttonText}>Xogadores</Text>
        </TouchableOpacity>
  
        </ScrollView>
      </View>
    );
  };
  
  export default HomeScreen;