
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ItemStatistical extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  titleHeader: {
    marginLeft: 10,
    fontSize: 18
  },
  headerContainerStyle: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
});
