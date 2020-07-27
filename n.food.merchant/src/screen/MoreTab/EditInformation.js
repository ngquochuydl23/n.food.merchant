
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

class EditInformation extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }} >
            <View style={styles.informationContainer}>
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>Restaurant Name</Text>
              <TextInput style={styles.textInputStyle} />
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>Phone Number</Text>
              <TextInput keyboardType="phone-pad" style={styles.textInputStyle} />
            </View>
            <View style={styles.informationContainer}>
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>City</Text>
              <TextInput style={styles.textInputStyle} />
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>District</Text>
              <TextInput style={styles.textInputStyle} />
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>Ward</Text>
              <TextInput style={styles.textInputStyle} />
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <Text style={{ marginLeft: 10, color: 'black', paddingTop: 4 }}>Details Address</Text>
              <Text style={{ marginLeft: 10, color: 'gray', fontSize: 12 }}>Unit number, house number, building, street name</Text>
              <TextInput style={styles.textInputStyle} />
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <TouchableNativeFeedback
                style={{ height: 50, backgroundColor: 'white', justifyContent: 'center', paddingLeft: 10, marginTop: 1 }}>
                <View>
                  <Text style={{ color: 'black' }}>Select Location</Text>
                  <Text style={{ fontSize: 12, color: 'gray' }}>For more accurate location</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
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
  }
});

export default EditInformation;
