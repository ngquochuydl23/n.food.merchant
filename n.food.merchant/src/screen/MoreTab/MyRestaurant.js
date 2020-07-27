
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';

class MyRestaurant extends Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }} >
            
          </ScrollView>
        </View>
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
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  informationContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    marginTop: 5
  },
  textInputStyle: {
    marginLeft: 10,
    padding: 0,
    fontSize: 15
  },
  avatarContainer: {
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  avatarStyle: {
    height: 70,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    marginHorizontal: 10
  },
});

export default MyRestaurant;
