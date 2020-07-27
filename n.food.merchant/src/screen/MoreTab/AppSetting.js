
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Colors,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



class AppSetting extends Component {
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
    fontFamily: 'sf_ui_display_regular',
    fontSize: 18
  },
  headerContainerStyle: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
});

export default AppSetting;
