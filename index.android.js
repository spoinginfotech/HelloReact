import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Bananas from './src/Bananas';
import Blinking from './src/Blinking';
import ListItems from './src/ListItems';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello world!</Text>
        <Bananas />
        <ListItems/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
