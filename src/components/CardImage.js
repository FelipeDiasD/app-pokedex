import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ButtonScreenChange from './ButtonScreenChange'

const cardImage = props => {
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        style={styles.imagePressableContainer}
        onPress={() => props.nav.navigate('Details')}
      >
        <Image
          source={{ uri: props.text }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 14,
    width: 320,
    height: 400,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 2
  },
  imagePressableContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    height: '65%'
  },
  imageStyle: {
    width: '70%',
    height: '70%'
  }
})

export default cardImage
