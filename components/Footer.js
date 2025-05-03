import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>© 2025 Mi App</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  text: {
    color: 'white',
  },
});

export default Footer;