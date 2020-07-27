import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addCategory } from "../../action/menuAction/menuAction";

class AddCategory extends Component {
  state = {
    selectType: 'Thức ăn nhẹ',
    isCreated: false,
    nameCategory: null,
  }


  addCategoryAction() {
    const { nameCategory,selectType } = this.state
    this.props.addCategory({ 
      nameCategory : nameCategory,
      selectType : selectType,
      numberItem : 0
    })
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }} >
            <View style={styles.informationContainer}>
              <Text style={styles.title}>Name Category</Text>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={text => this.setState({ nameCategory: text })} />
              <Text style={styles.title}>Select Type</Text>
              <TouchableNativeFeedback
                onPress={() => this.refs.SelectType.openBottomSheet()}
                style={[styles.textInputStyle, { justifyContent: 'center' }]}>
                <Text style={{ color: 'gray' }}>{this.state.selectType}</Text>
              </TouchableNativeFeedback>
            </View>
            <View style={{ backgroundColor: 'white' }}>
              <TouchableNativeFeedback
                onPress={() => this.addCategoryAction()}
                style={styles.buttonStyle}>
                <Text style={{ color: 'white', fontSize: 16 }}>Add Category</Text>
              </TouchableNativeFeedback>
              {
                this.state.isCreated &&
                <View>
                  <TouchableNativeFeedback
                    onPress={() => this.addCategory()}
                    style={styles.buttonStyle}>
                    <Text style={{ color: 'white', fontSize: 16 }}>{this.state.isCreated ? "Edit" : "Add Category"}</Text>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    style={[styles.buttonStyle, { backgroundColor: 'white' }]}>
                    <Text style={{ color: 'white', fontSize: 16, color: 'red' }}>Delete</Text>
                  </TouchableNativeFeedback>
                </View>
              }
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
	addCategory: (itemCategory) => dispatch(addCategory(itemCategory))
})

export default connect(null,mapDispatchToProps)(AddCategory);

const styles = StyleSheet.create({
  titleHeader: {
    marginLeft: 10,
    fontFamily: 'sf_ui_display_regular',
    fontSize: 18
  },
  headerContainerStyle: {
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  informationContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 10,
    marginTop: 2
  },
  textInputStyle: {
    marginHorizontal: 10,
    padding: 0,
    height: 45,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    fontSize: 15
  },
  title: {
    marginLeft: 10,
    color: 'black',
    paddingTop: 4,
    marginBottom: 5
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
});

