import React from 'react'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'

import CardInfoDetails from '../components/CardInfoDetails'
import CardImageDetails from '../components/CardImageDetails'
import CardImage from '../components/CardImage'

const DetailsPoke = () => {
  return (
    <View style={styles.container}>
      <CardInfoDetails></CardInfoDetails>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    //alignContent: 'center',
    //justifyContent: 'center',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#D3D3D3'
  }
})

export default DetailsPoke
