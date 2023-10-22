import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputElement from './src/lib/ui-components/InputElement';
import Login from './src/screens/Login';

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_Regular: require('./assets/fonts/Barlow-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
