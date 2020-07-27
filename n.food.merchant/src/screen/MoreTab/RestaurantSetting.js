
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



class RestaurantSetting extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.workTimeContainer}>
          <Text style={{fontSize : 20,fontWeight : 'bold'}}>Working Time</Text>
          <View>
            <Text>Mon, Tus, Wed, Thu, Fri, Sat, Sun</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  workTimeContainer : {
    marginTop: 2,
    backgroundColor : 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent : 'space-evenly'
  }
});

export default RestaurantSetting;
