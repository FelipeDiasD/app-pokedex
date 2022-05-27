import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native'



const CardImage = props => {
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

export default CardImage
