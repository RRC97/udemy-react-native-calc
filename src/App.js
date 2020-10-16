import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonDisplay from './components/ButtonDisplay';
import CalcDisplay from './components/CalcDisplay';

export default function App() {
  return (
    <View style={styles.container}>
      <CalcDisplay />
      <ButtonDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    fontFamily: 'Roboto'
  },
});
