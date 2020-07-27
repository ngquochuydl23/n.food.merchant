
import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  TextInput,
  Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { Service } from "../../FetchAPI/service";

const Tab = createStackNavigator();

class SignIn extends Component {

  state = {
    phoneNumber: null,
    password: null,
    isLoading: false,
  }

  gotoMainScreen() {
    this.props.navigation.replace('MainRoot')
  }
  signIn() {
    this.setState({ isLoading: true })
    return Service.post('Account/SignIn', {
      Email: this.state.phoneNumber,
      Password: this.state.password,
      IsPersistent: true
    })
      .then(res => {
        const response = res.data;
        var statusCode = response.statusCode
        console.log(statusCode)
        if (statusCode === 200) {
          var token_auth = response.result.authToken
          AsyncStorage.setItem("TOKEN_AUTH", token_auth);
          this.setState({ isLoading: false })
          this.gotoMainScreen()
        }
      })
      .catch(error => {
        this.setState({ isLoading: false })
      })
      .finally(function () {

      });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'whitesmoke' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View>
            <TextInput
              placeholder="Enter phone number"
              style={styles.textInputStyle}
              onChangeText={text => this.setState({ phoneNumber: text })} />
            <TextInput
              placeholder="Enter password"
              secureTextEntry
              style={[styles.textInputStyle, { marginTop: 20 }]}
              onChangeText={text => this.setState({ password: text })} />
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            <TouchableOpacity
              onPress={() => this.signIn()}
              style={styles.buttonStyle}>
              <Text style={{ color: 'white', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  textInputStyle: {
    marginHorizontal: 20,
    padding: 0,
    height: 45,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 15
  },
  buttonStyle: {
    borderRadius: 5,
    height: 45,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 2,
    shadowOpacity: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  forgotPasswordText: {
    marginVertical: 10,
    marginRight: 10,
    alignSelf: 'flex-end'
  }
});
export default SignIn;
