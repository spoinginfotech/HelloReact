import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Bananas from './src/Bananas';
import Blinking from './src/Blinking';
import ListItems from './src/ListItems';
import SampleButtons from './src/SampleButtons';
import Forex from './src/Forex';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Forex currency='PHP' />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#174c5d'
  },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
