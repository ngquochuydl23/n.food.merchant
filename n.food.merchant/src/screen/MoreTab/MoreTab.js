
import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';
import ItemSettingClick from "../../component/Item/ItemSetting";

class MoreTab extends Component {
  state = {
    avatarUser: null,
    nameUser: null,
    isRestaurantOnline: true,
    isOpen: false
  }

  componentDidMount() {
    const img = 'https://gongcha.com.vn/wp-content/uploads/2019/06/summer.th%E1%BB%AD395x280-01.jpg'
    this.setState({ avatarUser: img, nameUser: 'Gongcha Phú Mỹ Hưng', colorStatusRestaurant: 'green', textStatusRestaurant: 'OPENING' })
  }

  signOut() {
    AsyncStorage.removeItem("TOKEN_AUTH")
    this.props.navigation.replace('RegisterRoot')
  }

  restaurantStatus() {
    if (this.state.isRestaurantOnline) {
      this.setState({ isOpen: true })
    } else
      this.setState({ isRestaurantOnline: true })
  }

  myRestaurantClick() {
    this.props.navigation.navigate('MyRestaurant')
  }
  restaurantSettingClick() {
    this.props.navigation.navigate('RestaurantSetting')
  }
  appSettingClick() {
    this.props.navigation.navigate('AppSetting')
  }

  closeRestaurant() {
    this.setState({ isRestaurantOnline: false, isOpen: false })
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>More</Text>
        </View>
        <ScrollView>
          <TouchableNativeFeedback
            style={styles.avatarContainer}
            onPress={() => this.myRestaurantClick()}>
            <Image
              style={styles.avatarStyle}
              source={{ uri: this.state.avatarUser }} />
            <View style={{ height: '70%' }}>
              <Text style={styles.nameUserStyle}>{this.state.nameUser}</Text>
              <Text style={styles.idDriverStyle}>ID : 220903</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.restaurantStatus()}
            style={styles.statusRestaurantStyle}>
            <View style={{ justifyContent: 'space-evenly' }}>
              <Text style={{ fontSize: 16 }}>Restaurant Status</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{this.state.isRestaurantOnline ? "Press to close temporary" : "Press to continue"}</Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: this.state.isRestaurantOnline ? 'green' : 'red' }}>
              {this.state.isRestaurantOnline ? 'OPENING' : 'CLOSE'}
            </Text>
          </TouchableNativeFeedback>
          <Text style={{ marginLeft: 13, color: 'gray', paddingVertical: 4 }}>Settings</Text>
          <ItemSettingClick
            titleItem="Restaurant Setting"
            handlePress={() => this.restaurantSettingClick()} />
          <ItemSettingClick
            titleItem="App Setting"
            icon={require('../../image/icon_setting.png')}
            handlePress={() => this.appSettingClick()} />
          <TouchableOpacity
            onPress={() => this.signOut()}
            style={styles.buttonStyle}>
            <Text style={{ color: 'green' }}>Sign out</Text>
          </TouchableOpacity>
        </ScrollView>
        <Dialog
          visible={this.state.isOpen}
          width={0.85}
          onHardwareBackPress={() => {
            this.setState({ isOpen: false });
            return true;
          }}
          onTouchOutside={() => {
            this.setState({ isOpen: false });
          }}>
          <DialogContent>
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 18, marginTop: 20, textAlign: 'center', fontWeight: 'bold', }}>Close until</Text>
              <View style={{ height: 100 }}>

              </View>
            </View>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => this.closeRestaurant()}>
              <Text style={{ color: 'white' }}>Confirm</Text>
            </TouchableOpacity>
          </DialogContent>
        </Dialog>
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
  statusRestaurantStyle: {
    marginTop: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10
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
  nameUserStyle: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'sf_ui_display_regular',
  },
  idDriverStyle: {
    fontSize: 15,
    marginTop: 3,
    fontFamily: 'sf_ui_display_regular',
    color: 'gray'
  },
  buttonStyle: {
    borderRadius: 5,
    height: 45,
    margin: 10,
    borderColor: 'green',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center'
  },
  confirmButton: {
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MoreTab;
