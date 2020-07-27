import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogTitle } from 'react-native-popup-dialog';



class ItemFood extends Component {

  state = {
    isOpen: false,
    statusFood: null
  }

  itemFoodClick(id) {
    console.log(id)
    this.setState({ isOpen: true })
  }

  componentDidMount() {
    this.setState({ statusFood: this.props.itemFood.statusFood })
  }


  soldOut() {
    //post server
    this.setState({ statusFood: 'Sold out', isOpen: false })
  }

  render() {

    const { itemFood, handlePress } = this.props
    return (
      <View>
        <TouchableNativeFeedback
          style={styles.itemMenuContainer}
          onPress={() => this.itemFoodClick(itemFood.id)}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Image
              source={{ uri: itemFood.imageFood }}
              style={styles.imageFoodStyle} />
            <View style={{ justifyContent: 'space-between' }}>
              <View style={{ flex: 1,justifyContent: 'space-between' }}>
                <Text style={styles.titleItem}>{itemFood.nameFood}</Text>
                <Text style={styles.priceStyle}>{itemFood.priceFood}</Text>
                <View style={{ flexWrap: 'wrap' }}>
                  <Text style={[styles.statusFood, { backgroundColor: this.state.statusFood === 'Selling' ? 'green' : 'red' }]}>
                    {this.state.statusFood}
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </TouchableNativeFeedback>
        <Dialog
          visible={this.state.isOpen}
          width={0.85}
          onHardwareBackPress={() => {
            this.setState({ isOpen: false })
            return true
          }}
          onTouchOutside={() => {
            this.setState({ isOpen: false })
          }}>
          <DialogContent>
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 18, marginTop: 20, textAlign: 'center', fontWeight: 'bold', }}>Food Status</Text>
              <Text style={{ color: 'gray', fontSize: 16, marginVertical: 20, textAlign: 'center' }}>Food is sold out ?</Text>
            </View>
            <View style={{ height: 40, flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.buttonDialogStyle, { marginRight: 5 }]}>
                <Text>Edit Food</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonDialogStyle, { marginLeft: 5, backgroundColor: 'red' }]}
                onPress={() => this.soldOut()}>
                <Text style={{ color: 'white' }}>Sold out</Text>
              </TouchableOpacity>
            </View>
          </DialogContent>
        </Dialog>
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
  },
  imageFoodStyle: {
    height: 70,
    aspectRatio: 1 / 1,
    borderRadius: 5,
    marginHorizontal: 10
  },
  priceStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  statusFood: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 3,
    fontSize: 13,
    paddingVertical: 1,
    paddingHorizontal: 4,
  },
  buttonDialogStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    borderRadius: 5
  }
});

export default ItemFood;
