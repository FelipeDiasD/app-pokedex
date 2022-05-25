import React from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'

const ButtonScreenChange = () => {
  return <TouchableOpacity onPress={
    () => Alert.alert("Pressed", "Burrão")
  } style={styles.invisibleButtonStyle} />
}

const styles = StyleSheet.create({
  invisibleButtonStyle: {
    
    width: 200,
    height: 200,
    
    //color: 'blue',
    
  }
})

export default ButtonScreenChange
