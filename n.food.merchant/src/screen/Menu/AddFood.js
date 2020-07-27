import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import BottomSheet from "../../component/bottomSheet/customBottomSheet";
import ImagePicker from 'react-native-image-picker';
import { connect } from 'react-redux';
import { addFood } from "../../action/menuAction/menuAction";



function ItemSelectedGroup({ itemGroup, handlePress }) {
  console.log("itemGroup" + JSON.stringify(itemGroup))
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ height: 50, paddingHorizontal: 10, justifyContent: 'center' }}>
      <Text>{itemGroup.nameCategory}</Text>
    </TouchableOpacity>
  )
}


class AddFood extends Component {

  state = {
    isCreated: false,
    imageFood: null,
    nameFood: null,
    foodIngredients: null,
    priceFood: null,
    iDGroup: null,
    selectGroup : null
    
  }

  selectImageFromLibrary = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imageFood: source,
        });
      }
    });
  }

  addFoodAction() {
    const { nameFood, imageFood, foodIngredients, priceFood, iDGroup } = this.state
    this.props.addFood(iDGroup,{
      nameFood: nameFood,
      imageFood: imageFood,
      foodIngredients: foodIngredients,
      priceFood: priceFood,
    })
    this.props.navigation.goBack();
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ backgroundColor: 'white', marginTop: 2, flexDirection: 'row', padding: 10 }}>
            <TouchableNativeFeedback
              onPress={() => this.selectImageFromLibrary()}
              style={styles.ImageStyle}>
              <Image
                source={this.state.imageFood === null ? require('../../image/image_default.jpg') : this.state.imageFood}
                style={styles.ImageStyle} />
            </TouchableNativeFeedback>
            <View style={{ flex: 1 }}>
              <Text style={{ marginLeft: 10, color: 'gray' }} multiline>
                Dishes with high quality images will be favored. Image with scale 1:1
              </Text>
            </View>
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.title}>Name Food</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({ nameFood: text })} />
            <Text style={styles.title}>Food ingredients</Text>
            <View style={[styles.textInputStyle, { height: 100, paddingVertical: 2 }]} >
              <TextInput
                multiline
                onChangeText={text => this.setState({ foodIngredients: text })} />
            </View>
            <Text style={styles.title}>Price</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => this.setState({ priceFood: text })} />
          </View>
          <View style={styles.informationContainer}>
            <Text style={styles.title}>Select Group</Text>
            <TouchableNativeFeedback
              style={[styles.textInputStyle, { justifyContent: 'center' }]}
              onPress={() => this.refs.SelectGroup.openBottomSheet()}>
              <Text style={{ color: 'gray' }}>{this.state.selectGroup}</Text>
            </TouchableNativeFeedback>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <TouchableNativeFeedback
              onPress={() => this.addFoodAction()}
              style={styles.buttonStyle}>
              <Text style={{ color: 'white', fontSize: 16 }}>{this.state.isCreated ? "Edit" : "Add Food"}</Text>
            </TouchableNativeFeedback>
            {
              this.state.isCreated &&
              <TouchableNativeFeedback
                style={[styles.buttonStyle, { backgroundColor: 'white' }]}>
                <Text style={{ color: 'white', fontSize: 16, color: 'red' }}>Delete</Text>
              </TouchableNativeFeedback>
            }
          </View>
          <BottomSheet
            ref="SelectGroup"
            height={Dimensions.get('screen').height - 150}
            openDuration={250}
            style={{ flexDirection: 'column' }}
            children={
              <View>
                <ScrollView>
                  <TextInput
                    placeholder="Search Category"
                    style={[styles.textInputStyle, { marginTop: 10 }]}
                  />
                  {
                    this.props.menuList.map(item => {
                      return (
                        <ItemSelectedGroup
                          handlePress={() => {
                            this.setState({ iDGroup : item.id,selectGroup : item.nameCategory })
                            this.refs.SelectGroup.closeBottomSheet()
                          }}
                          itemGroup={item}
                        />
                      )
                    })
                  }
                </ScrollView>
                <TouchableNativeFeedback
                  //onPress={() => this.addFoodAction()}
                  style={styles.buttonStyle}>
                  <Text style={{ color: 'white', fontSize: 16 }}>Add Category</Text>
                </TouchableNativeFeedback>
              </View>
            }
          />
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  menuList: state.menuReducer
})

const mapDispatchToProps = (dispatch) => ({
  addFood: (idGroup,itemFood) => dispatch(addFood(idGroup,itemFood))
})

export default new connect(mapStateToProps, mapDispatchToProps)(AddFood);


const styles = StyleSheet.create({
  ImageStyle: {
    aspectRatio: 1 / 1,
    height: 100,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  informationContainer: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 15,
    marginTop: 5
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
  title: {
    marginLeft: 10,
    color: 'black',
    paddingTop: 4,
    marginBottom: 5
  }
});
