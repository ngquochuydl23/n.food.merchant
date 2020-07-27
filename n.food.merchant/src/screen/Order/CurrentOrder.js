
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import ItemOrder from "../../component/Item/ItemOrder";

const data = [
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },{
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },{
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  },
  {
    IdOrder: '140203',
    NumberItem: 4,
    driver: 'Nguyễn Ngọc Vân',
    intendTime: '10 minutes',
    time: '17:00'
  }
]

export default class OrderTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={item => item.IdOrder}
          renderItem={({ item }) => (
            <ItemOrder
              handlePress={() => this.props.navigation.navigate('OrderDetail',item)}
              itemOrder={item}
            />
          )} />
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
});
