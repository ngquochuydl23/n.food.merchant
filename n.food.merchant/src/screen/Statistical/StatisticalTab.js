
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ItemStatistical from "./ItemStatistical";
import SaleStatistical from "./SaleStatistical";
const Tab = createMaterialTopTabNavigator();

export default class StatisticalTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>Statistical</Text>
        </View>
        <Tab.Navigator
          initialRouteName="SaleStatistical"
          backBehavior="none"
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            upperCaseLabel: false,
            indicatorStyle: {
              backgroundColor: 'green'
            }
          }}>
          <Tab.Screen
            name="SaleStatistical"
            component={SaleStatistical}
            options={{
              tabBarLabel: 'Sales',
              upperCaseLabel: false
            }} />
          <Tab.Screen
            name="ItemStatistical"
            component={ItemStatistical}
            options={{
              tabBarLabel: 'Item',
              upperCaseLabel: false
            }} />
        </Tab.Navigator>
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
