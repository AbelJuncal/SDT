import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.text}>© 2025 S3lino</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    padding: 5,
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