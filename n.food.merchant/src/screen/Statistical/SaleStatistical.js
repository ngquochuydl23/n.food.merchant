
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 'Mon', earnings: 3000 },
  { quarter: 'Tus', earnings: 4500 },
  { quarter: 'Wed', earnings: 1000 },
  { quarter: 'Thu', earnings: 2900 },
  { quarter: 'Fri', earnings: 2000 },
  { quarter: 'Sat', earnings: 1500 },
  { quarter: 'Sun', earnings: 900 }
];


export default class SaleStatistical extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{paddingHorizontal: 10,backgroundColor :'white'}}>
        <View style={{marginTop : 20,marginBottom : -30}}>
          <Text style={{fontSize : 20}}>Sales of week</Text>
        </View>
        <VictoryChart
          theme={VictoryTheme.material}
          style={{
            data: {
              fill: "#c43a31",
              width: 15
            }
          }}
          domainPadding={{ x : 40 }}>
          <VictoryBar
            cornerRadius={3}
            barRatio={0.8}
            data={data}
            style={{
              data: {
                fill: "rgba(0, 128, 0, 0.6)",
                width: 30
              }
            }} x="quarter" y="earnings" alignment="middle" />
        </VictoryChart>
        </View>
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
