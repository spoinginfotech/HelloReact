import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Bananas from './Bananas';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', padding: 20}}>
        <Text>Hello world!</Text>
        <Bananas />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
