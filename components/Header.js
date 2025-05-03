import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>Mi App</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;