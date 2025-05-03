import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return <AppNavigator />;
}

