import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../assets/images/escudo3.png'; 

const Header = () => (
  <View style={styles.header}>
    <Image source={logo} style={styles.logo} />
    <Text style={styles.text}>SDTrainer</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;