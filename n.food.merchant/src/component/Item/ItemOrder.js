import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';


class ItemOrder extends Component {

  render() {
    const { itemOrder, handlePress } = this.props
    return (
      <View>
        <TouchableNativeFeedback
          onPress={handlePress}
          style={styles.itemMenuContainer}>
          <View style={{flexDirection : 'row',justifyContent : 'space-between'}}>
            <Text style={styles.titleItem}>ID : {itemOrder.IdOrder}</Text>
            <Text style={styles.titleItem}>{itemOrder.time}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <Text style={styles.numberItem}>{itemOrder.NumberItem} Item For </Text>
            <Text style={[styles.numberItem, { fontWeight: 'bold', color: 'black' }]}>{itemOrder.driver}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.numberItem}>Driver will come after </Text>
            <Text style={[styles.numberItem, { fontWeight: 'bold', color: 'green' }]}>{itemOrder.intendTime}</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={{ height: 1, backgroundColor: 'whitesmoke' }} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  itemMenuContainer: {
    padding: 10,
    backgroundColor: 'white'
  },
  titleItem: {
    fontSize: 16
  },
  numberItem: {
    fontSize: 14,
    color: 'gray'
  }
});

export default ItemOrder;
