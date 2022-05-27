import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'

const CardImageDetails = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: '' }}
        style={styles.imageStyle}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '70%',
    height: '70%'
  }
})

export default CardImageDetails
