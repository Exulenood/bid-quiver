import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputElement from './src/lib/ui-components/InputElement';

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_Regular: require('./assets/fonts/Barlow-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.mainContainer}>
      <InputElement variant="neutral" labelText="Test" labelPos="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});
