
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "../Register/SignIn";
import { HeaderStyle } from "../../component/styles/HeaderStyle";

const Tab = createStackNavigator();

function RegisterRoot() {
  return (
    <View style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
      <Tab.Navigator initialRouteName="SignIn">
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
            headerStyle: HeaderStyle.headerStyle,
            headerTitleStyle: HeaderStyle.headerTitleStyle,
          }} />
      </Tab.Navigator>
    </View>
  )
};


const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 10,
    padding: 0,
    height: 45,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 15
  }
});
export default RegisterRoot;
