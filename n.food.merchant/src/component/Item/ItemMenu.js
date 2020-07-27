import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler';

import ItemFood from "./ItemFood";

class ItemMenu extends Component {
  state = {
    isCollapse : false
  }
  render() {
    const { itemMenu, handlePress } = this.props
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => this.setState({ isCollapse : !this.state.isCollapse})}
          style={styles.itemMenuContainer}>
          <Text style={styles.titleItem}>{itemMenu.nameCategory}</Text>
          <Text style={styles.numberItem}>{itemMenu.numberItem} Item</Text>
        </TouchableNativeFeedback>
        <View style={{ height: 1, backgroundColor: 'whitesmoke' }} />
        {
          this.state.isCollapse && itemMenu.menuItem != null && itemMenu.menuItem.map(item => {
            return (
              <ItemFood
                itemFood={item}
              />
            )
          })
        }
      </View>
    )                                                            
  }
}


const styles = StyleSheet.create({
  itemMenuContainer: {
    padding: 10, backgroundColor: 'white'
  },
  titleItem: {
    fontSize: 16
  },
  numberItem: {
    fontSize: 14,
    color: 'gray'
  }
});

export default ItemMenu;
