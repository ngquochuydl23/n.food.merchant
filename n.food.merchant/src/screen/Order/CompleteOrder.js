
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Colors
} from 'react-native';

export default class CompleteTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text></Text>
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
