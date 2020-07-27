import React, { Component, Children } from 'react'
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import { call } from 'redux-saga/effects';

class BottomSheet extends Component {

  openBottomSheet(){
    this.RBSheet.open()
  }


  closeBottomSheet(){
    this.RBSheet.close()
  }

  render(){
    const { animationType,height, openDuration, style, children } = this.props
    return (
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        animationType={animationType}
        height={height}
        openDuration={openDuration}
        customStyles={style}>
        {children}
      </RBSheet>
    )
  }
}

export default BottomSheet