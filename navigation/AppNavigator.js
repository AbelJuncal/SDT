import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import Layout from '../components/Layout';

const Stack = createStackNavigator();

// Esta función envuelve cualquier pantalla con el Layout
const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={withLayout(HomeScreen)} />
      <Stack.Screen name="Calendar" component={withLayout(CalendarScreen)} />
      {/* <Stack.Screen name="Settings" component={withLayout(SettingsScreen)} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
