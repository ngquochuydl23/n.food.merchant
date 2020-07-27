import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Rating } from 'react-native-ratings';

class DialogDriverInformation extends Component {

  state = {
    visibility: false
  }

  showDialog() {
    this.setState({ visibility: true })
  }

  closeDialog() {
    this.setState({ visibility: false })
  }

  messageButton() {
    this.closeDialog()
  }

  callButton(phoneNumber) {
    this.closeDialog()
    Linking.openURL(`tel:${phoneNumber}`)
  }

  render() {

    const { driverInformation } = this.props
    return (
      <Dialog
        width={0.85}
        visible={this.state.visibility}
        onHardwareBackPress={() => {
          this.closeDialog()
          return true;
        }}
        onTouchOutside={() => {
          this.closeDialog()
        }}>
        <DialogContent>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginTop: 20, textAlign: 'center', fontWeight: 'bold', }}>Driver Information</Text>
            <Image
              style={styles.avatarDriverStyle}
              source={{ uri: driverInformation.driverAvatar }} />
            <Text style={styles.nameDriverStyle}>{driverInformation.driverName}</Text>
            <Rating
              imageSize={30}
              readonly={true}
              ratingColor='#FDCC0D'
              startingValue={driverInformation.driverRating}
              ratingBackgroundColor='whitesmoke'
              style={{ paddingVertical: 10 }}
            />
            <Text style={styles.driverMotorStyle}>{driverInformation.driverMotor}</Text>
          </View>
          <View style={{ height: 40, flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => this.messageButton()}
              style={styles.messengerButtonStyle}>
              <Text style={{ color: 'green', fontSize: 16 }}>Messenger</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.callButton(driverInformation.phoneNumber)}
              style={styles.callButtonStyle}>
              <Text style={{ color: 'white', fontSize: 16 }}>Call</Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}


const styles = StyleSheet.create({
  driverMotorStyle: {
    fontSize: 16,
    textAlign: 'center'
  },
  nameDriverStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  callButtonStyle: {
    borderRadius: 7,
    flex: 1,
    elevation: 2,
    shadowOpacity: 2,
    backgroundColor: 'green',
    alignItems: 'center',
    marginLeft: 5,
    justifyContent: 'center'
  },
  messengerButtonStyle: {
    borderRadius: 7,
    flex: 1,
    borderColor: 'green',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 5,
    borderColor: 'green',
    justifyContent: 'center'
  },
  avatarDriverStyle: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 100
  }
});

export default DialogDriverInformation;
