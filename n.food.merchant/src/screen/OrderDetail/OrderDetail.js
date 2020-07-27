
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import ItemFoodOrder from "../../component/Item/ItemFoodOrder";
import DialogDriverInformation from "../../component/Dialog/DialogDriverInformation";
import DialogFoodOrder from "../../component/Dialog/DialogFoodOrder";

const data = [
  {
    numberItem: 2,
    nameFood: 'Trà Sữa Xoài Trân Châu Đen',
    noteFood: 'Ít đường, không kem',
    priceFood: '40.000đ'
  },
  {
    numberItem: 1,
    nameFood: 'Trà Sữa Okinawa',
    noteFood: 'Ít đường, không kem',
    priceFood: '40.000đ'
  },
  {
    numberItem: 2,
    nameFood: 'Trà Sữa Matcha Đậu Đỏ',
    noteFood: 'Ít đường, không kem',
    priceFood: '40.000đ'
  }

]

const driver = {
  driverAvatar: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/93860343_2346686558961766_2416565144390729728_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=W5n_s_sWqKsAX8-EzwL&_nc_ht=scontent.fdad3-3.fna&oh=92af17e2ac94b928026d3e0fe9f18c96&oe=5F39776F',
  driverName: 'Nguyễn Ngọc Vân',
  driverRating: 4.5,
  phoneNumber: '0868684961',
  driverMotor: '49B1-407.41 - Yamaha Exciter 150'
}

export default class OrderDetail extends Component {

  state = {
    driverName: null,
    idDriver: null,
    driverAvatar: null,
    phoneNumber: null,
  }

  componentDidMount() {
    this.setState({
      driverName: 'Nguyễn Ngọc Vân',
      idDriver: '220903',
      phoneNumber: '0868684961',
      driverAvatar: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/93860343_2346686558961766_2416565144390729728_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=W5n_s_sWqKsAX8-EzwL&_nc_ht=scontent.fdad3-3.fna&oh=92af17e2ac94b928026d3e0fe9f18c96&oe=5F39776F'
    })
  }

  callDriver() {
    Linking.openURL(`tel:${this.state.phoneNumber}`)
  }

  messengerDriver() {

  }

  completeOrder() {

  }

  showDriverInformation() {
    this.refs.DriverInformation.showDialog()
  }


  render() {
    const orderInformation = this.props.route.params
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.informationContainer}>
            <Text style={styles.titleItem}>ID : {orderInformation.IdOrder}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.titleItem, { fontSize: 15, color: 'gray' }]}>Driver will come after</Text>
              <Text style={[styles.titleItem, { fontSize: 15, color: 'green' }]}>10 minutes</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.contactContainer}
            onPress={() => this.showDriverInformation()}>
            <Image
              style={{ height: '60%', aspectRatio: 1 / 1, borderRadius: 100, }}
              source={{ uri: this.state.driverAvatar }} />
            <View style={{ height: '70%', justifyContent: 'center', marginLeft: 10 }}>
              <Text style={styles.nameDriverStyle}>{this.state.driverName}</Text>
              <Text style={styles.idDriverStyle}>ID : {this.state.idDriver}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={styles.contactButton}
                onPress={() => this.callDriver()}>
                <Image
                  source={require('../../image/icon_call.png')}
                  style={{ height: 22, width: 22 }} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.contactButton}
                onPress={() => this.messengerDriver()}>
                <Image
                  source={require('../../image/icon_message.png')}
                  style={{ height: 22, width: 22 }} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <View>
            <FlatList
              data={data}
              keyExtractor={item => item.nameFood}
              renderItem={({ item }) => (
                <ItemFoodOrder
                  itemFoodOrder={item}
                />
              )}
            />
          </View>
        </ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <View style={{ backgroundColor: 'whitesmoke', height: 1 }} />
          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Bill</Text>
              <Text style={{ fontSize: 17 }}>160.000đ</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Discount</Text>
              <Text style={{ fontSize: 17, marginRight: 3 }}>-20.000đ</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 3 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total</Text>
              <Text style={{ fontSize: 17 }}>140.000đ</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.completeOrder()}
            style={styles.buttonStyle}>
            <Text style={{ color: 'white', fontSize: 16 }}>Complete</Text>
          </TouchableOpacity>
        </View>
        <DialogDriverInformation
          driverInformation={driver}
          ref="DriverInformation" />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  titleHeader: {
    marginLeft: 10,
    fontSize: 18
  },
  headerContainerStyle: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemMenuContainer: {
    padding: 10,
    backgroundColor: 'white'
  },
  titleItem: {
    fontSize: 20
  },
  numberItem: {
    fontSize: 18,
    color: '#606060'
  },
  informationContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 2
  },
  contactContainer: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  contactButton: {
    height: 50,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameDriverStyle: {
    color: 'black',
    fontSize: 17,
  },
  idDriverStyle: {
    fontSize: 15,
    color: 'gray'
  },
  buttonStyle: {
    borderRadius: 5,
    height: 45,
    margin: 10,
    elevation: 2,
    shadowOpacity: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  priceContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 5
  }
});
