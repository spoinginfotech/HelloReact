import React, { Component } from 'react';
import { ListView, Text, StyleSheet, View } from 'react-native';
import * as forexService from './services/fixerApi';
import ForexItem from './ForexItem';

export default class Forex extends Component {
  constructor(props) {
    super(props);
    let exchange_rates = [];
    this.state = {dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})};
    forexService.getLatest(this.props.currency).then(res => {
      Object.keys( res.rates ).forEach( (key, value) => {
        exchange_rates.push({currency: key, rate: res.rates[key]})
      });

      console.log(exchange_rates);
      this.setState({
        currency: res.base,
        date: res.date,
        dataSource: this.state.dataSource.cloneWithRows(exchange_rates)
      });
    });
  }

    render() {
        return (
            <View>
                <Text>Currency: {this.state.currency}</Text>
                <ListView style={styles.container}
                      dataSource={this.state.dataSource}
                      enableEmptySections={true}
                      renderRow={data => <ForexItem data={data} />}
                      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 60
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#AAAAAA',
    }
});