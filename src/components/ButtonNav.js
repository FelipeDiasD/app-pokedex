import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const ButtonNav = props => {
  if (props.disable == false) {
    styles.buttonStyle.color
  }

  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={props.update}
      disable={props.disable}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonFrame: {},
  buttonStyle: {
    //height: 30,
    borderRadius: 12,
    backgroundColor: 'red',
    marginHorizontal: 16,
    margin: 5,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 130
  }
})

export default ButtonNav
