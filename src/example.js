import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Bananas from './Bananas';
import Blinking from './Blinking';
import ListItems from './ListItems';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text>Hello world!</Text>
        <Bananas />
        <ListItems/>

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
