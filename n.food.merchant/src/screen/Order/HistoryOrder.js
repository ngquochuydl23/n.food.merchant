
import React, { Component } from 'react';
import { StyleSheet,View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';





export default class HistoryTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          {/* <ItemOrder /> */}
        </ScrollView>
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
