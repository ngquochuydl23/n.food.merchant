import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import DialogFoodOrder from "../../component/Dialog/DialogFoodOrder";

class ItemFoodOrder extends Component {

  showFoodOrder() {
    this.refs.FoodOrder.showDialog()
  }

  render() {
    const { itemFoodOrder } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.showFoodOrder()}
          style={styles.itemFoodOrder}>
          <View style={{ justifyContent: 'center', paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 16 }}>x{itemFoodOrder.numberItem}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{itemFoodOrder.nameFood}</Text>
            {
              itemFoodOrder.noteFood != null &&
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: 14, color: 'green' }}>Note : </Text>
                <Text style={{ fontSize: 14 }}>{itemFoodOrder.noteFood}</Text>
              </View>
            }
          </View>
        </TouchableOpacity>
        <DialogFoodOrder
          foodOrder={itemFoodOrder}
          ref="FoodOrder" />
      </View>
    )
  }
}


export default ItemFoodOrder;
const styles = StyleSheet.create({
  itemFoodOrder : {
    flexDirection: 'row', 
    backgroundColor: 'white', 
    paddingVertical: 10, 
    marginTop: 2
  }
});
