import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { TouchableNativeFeedback, TextInput, FlatList } from 'react-native-gesture-handler';
import ItemMenu from "../../component/Item/ItemMenu";
import BottomSheet from "../../component/bottomSheet/customBottomSheet";
import { connect } from 'react-redux';
import { getMenuList } from "../../action/menuAction/menuAction";


class MenuTab extends Component {

  showBottomSheet() {
    this.refs.BottomSheet.openBottomSheet()
  }

  closeBottomSheet() {
    this.refs.BottomSheet.closeBottomSheet()
  }


  componentDidMount() {
    this.props.getMenuList()
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.titleHeader}>Menu</Text>
        </View>
        <View style={styles.headerController}>
          <TextInput placeholder="Search" style={styles.searchStyle} />
          <TouchableNativeFeedback
            style={styles.buttonStyle}
            onPress={() => this.showBottomSheet()}>
            <Text style={{ color: 'white', fontSize: 16 }}>Add</Text>
          </TouchableNativeFeedback>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.props.menuList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ItemMenu
              itemMenu={item}
            />
          )} />
        <BottomSheet
          ref="BottomSheet"
          style={{ flexDirection: 'column' }}
          height={120}
          openDuration={250}
          children={
            <View>
              <TouchableOpacity
                style={styles.bottomSheetItem}
                onPress={() => {
                  this.closeBottomSheet()
                  this.props.navigation.navigate('AddCategory')
                }}>
                <Text style={{ fontSize: 17 }}>Add Category</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>Ex : Breakfast, Dessert , ...</Text>
              </TouchableOpacity>
              <View style={{ height: 2, backgroundColor: 'whitesmoke' }} />
              <TouchableOpacity
                style={styles.bottomSheetItem}
                onPress={() => {
                  this.closeBottomSheet()
                  this.props.navigation.navigate('AddFood')
                }}>
                <Text style={{ fontSize: 17 }}>Add Food</Text>
                <Text style={{ fontSize: 14, color: 'gray' }}>Ex : Chicken, Milk Tea , ...</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </SafeAreaView>
    )
  }

};

const mapStateToProps = (state) => ({
  menuList: state.menuReducer
})


const mapDispatchToProps = (dispatch) => ({
  getMenuList: () => dispatch(getMenuList())
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuTab);

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
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
  headerController: {
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  buttonStyle: {
    borderRadius: 5,
    height: '100%',
    aspectRatio: 2 / 1,
    marginLeft: 10,
    elevation: 2,
    shadowOpacity: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 0,
    borderRadius: 5,
    paddingLeft: 10
  },
  bottomSheetItem: {
    padding: 10,
    height: 60,
    justifyContent: 'space-evenly'
  }
});



