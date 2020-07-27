
import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ItemSettingClick({ icon,titleItem, handlePress }) {
  return (
    <TouchableOpacity
      onPress={handlePress}>
      <View style={styles.itemSettingStyle}>
        <Image style={styles.iconStyle} source={icon}/>
        <Text style={{ fontSize: 16,marginLeft : 10 }}>{titleItem}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemSettingStyle: {
    height: 50,
    marginTop: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row'
  },
  iconStyle : {
    height : 24,
    width : 24
  }
});