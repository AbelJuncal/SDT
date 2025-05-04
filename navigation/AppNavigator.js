import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import Layout from '../components/Layout';
import FootballSquad from '../screens/FootballSquad';
import PlayerCarousel from '../screens/PlayerCarrusel';
import TeamStats from '../screens/TeamStats';

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
      <Stack.Screen name="FootballSquad" component={withLayout(FootballSquad)} />
      <Stack.Screen name="PlayerCarrusel" component={withLayout(PlayerCarousel)} />
      <Stack.Screen name="TeamStats" component={withLayout(TeamStats)} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
