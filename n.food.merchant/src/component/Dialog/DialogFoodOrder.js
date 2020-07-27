import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { ScrollView } from 'react-native-gesture-handler';

export default class DialogFoodOrder extends Component {

  state = {
    visibility: false
  }

  showDialog() {
    this.setState({ visibility: true })
  }

  closeDialog() {
    this.setState({ visibility: false })
  }

  render() {

    const { foodOrder } = this.props
    return (
      <Dialog
        width={0.85}
        height={Dimensions.get('window').height - 200}
        visible={this.state.visibility}
        onHardwareBackPress={() => {
          this.closeDialog()
          return true;
        }}
        onTouchOutside={() => {
          this.closeDialog()
        }}>
        <DialogContent>
          <View style={{ width: '100%' }}>
            <ScrollView contentContainerStyle={{ width: '100%' }}>
              <Text style={styles.nameFood}>{foodOrder.nameFood}</Text>
              <View style={styles.rowStyle}>
                <Text style={styles.itemNumber}>Item number : </Text>
                <Text style={styles.valueStyle}>{foodOrder.numberItem}</Text>
              </View>
              <View style={styles.rowStyle}>
                <Text style={styles.itemNumber}>Note : </Text>
                <Text style={styles.valueStyle}>{foodOrder.noteFood}</Text>
              </View>
              <View style={[styles.rowStyle, { flexDirection: 'column' }]}>
                <Text style={styles.itemNumber}>Topping : </Text>
                <View style={{marginLeft : 20}}>
                  <Text style={styles.toppingStyle}>Trân Châu Trắng</Text>
                  <Text style={styles.toppingStyle}>Thạch Phô mai</Text>
                  <Text style={styles.toppingStyle}>Pudding</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}


const styles = StyleSheet.create({
  nameFood: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  itemNumber: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 20,
  },
  valueStyle : {
    fontSize: 18 
  },
  toppingStyle : {
    fontSize: 18,
    marginVertical : 5
  }
});


