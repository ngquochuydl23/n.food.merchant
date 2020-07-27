
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Colors
} from 'react-native';

import OrderTab from './Order/OrderTab'
import NotificationTab from "./NotificationTab/NotificationTab";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoreTab from "./MoreTab/MoreTab";
import MenuTab from "./Menu/MenuTab";
import StatisticalTab from "./Statistical/StatisticalTab";

const Tab = createBottomTabNavigator();

class Mainscreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="HomeTab"
          backBehavior="initialRoute"
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: '#696969',
            style: { height: 56 },
            labelPosition: "below-icon",
          }}>
          <Tab.Screen
            name="OrderTab"
            component={OrderTab}
            options={{
              title: "Order",
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../image/icon_active_order.png")
                      : require("../image/icon_unactive_order.png")
                  }
                  style={{ height: 27, width: 27 }} />)
            }}
          />
          <Tab.Screen
            name="MeunTab"
            component={MenuTab}
            options={{
              title: "Menu",
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../image/icon_active_menu_food.png")
                      : require("../image/icon_unactive_menu_food.png")
                  }
                  style={{ height: 27, width: 27 }} />)
            }}
          />
          <Tab.Screen
            name="StatisticalTab"
            component={StatisticalTab}
            options={{
              title: "Statistical",
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../image/icon_active_statistical.png")
                      : require("../image/icon_unactive_statistical.png")
                  }
                  style={{ height: 27, width: 27 }} />)
            }} />
          <Tab.Screen
            name="NotificationTab"
            component={NotificationTab}
            options={{
              title: "Notification",
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../image/icon_active_notification.png")
                      : require("../image/icon_unactive_notification.png")
                  }
                  style={{ height: 27, width: 27 }} />)
            }} />
          <Tab.Screen
            name="MoreTab"
            component={MoreTab}
            options={{
              title: "More",
              tabBarIcon: ({ focused }) => (
                <Image
                  source={
                    focused
                      ? require("../image/icon_active_more.png")
                      : require("../image/icon_unactive_more.png")
                  }
                  style={{ height: 21, width: 27 }} />)
            }} />
        </Tab.Navigator>
      </View>
    )
  }
};

export default Mainscreen;
