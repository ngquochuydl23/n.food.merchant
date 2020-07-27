
import React, { Component } from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CurrentOrder from './CurrentOrder';
import HistoryOrder from './HistoryOrder';
import CompleteOrder from './CompleteOrder';
import CancelOrder from './CancelOrder';

const Tab = createMaterialTopTabNavigator();

export default class OrderTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>Order</Text>
        </View>
        <Tab.Navigator
          initialRouteName="CurrentOrder"
          backBehavior="none"
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            upperCaseLabel: false,  
            indicatorStyle: {
              backgroundColor: 'green'
            },
            labelStyle : {
              textTransform :'capitalize',
              fontSize : 14
            }
          }}>
          <Tab.Screen
            name="CurrentOrder"
            component={CurrentOrder}
            options={{
              tabBarLabel: 'Current',
            }} />
          <Tab.Screen
            name="HistoryOrder"
            component={HistoryOrder}
            options={{
              tabBarLabel: 'History',
            }} />
          <Tab.Screen
            name="CompleteOrder"
            component={CompleteOrder}
            options={{
              tabBarLabel: 'Completed',
            }} />
          <Tab.Screen
            name="CancelOrder"
            component={CancelOrder}
            options={{
              tabBarLabel: 'Canceled',
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
