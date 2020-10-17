import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonDisplay from './components/ButtonDisplay';
import CalcDisplay from './components/CalcDisplay';
import Operator from './utilities/Operator';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.operator = new Operator();
  }
  render() {
    return (
      <View style={styles.container}>
        <CalcDisplay ref={ref => this.operator.setComponent(ref)} operator={this.operator}/>
        <ButtonDisplay operator={this.operator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray'
  }
});
