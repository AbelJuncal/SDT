import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Styles, Colors } from '../styles'; // Importa los estilos y colores

import logo from '../assets/images/cup.svg'; 

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {children}
      </View>

        {/* Barra de símbolos justo encima del footer */}
        <View style={styles.iconBar}>
        {/* <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} /> */}
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    middle: {
      flex: 1,
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
      backgroundColor: '#121212',
    },
    iconBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      paddingVertical: 10,
    },
  });

export default Layout;