
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Colors
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Mainscreen from "../Mainscreen";
import MyRestaurant from "../MoreTab/MyRestaurant";
import RestaurantSetting from "../MoreTab/RestaurantSetting";
import AppSetting from "../MoreTab/AppSetting";
import AddCategory from "../Menu/AddCategory";
import AddFood from "../Menu/AddFood";
import OrderDetail from "../OrderDetail/OrderDetail";
import { HeaderStyle } from "../../component/styles/HeaderStyle";

const Tab = createStackNavigator();

export default function MainRoot() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName="Mainscreen">
        <Tab.Screen
          name="Mainscreen"
          component={Mainscreen}
          options={{
            headerShown: false,
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="MyRestaurant"
          component={MyRestaurant}
          options={{
            title: 'Kem Baskin-Robbins Quận 7',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="RestaurantSetting"
          component={RestaurantSetting}
          options={{
            title: 'Restaurant Setting',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="AppSetting"
          component={AppSetting}
          options={{
            title: 'App Setting',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="AddCategory"
          component={AddCategory}
          options={{
            title: 'Add Category',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="AddFood"
          component={AddFood}
          options={{
            title: 'Add Food',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
        <Tab.Screen
          name="OrderDetail"
          component={OrderDetail}
          options={{
            title: 'Order Detail',
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
      </Tab.Navigator>
    </View>
  )
};


