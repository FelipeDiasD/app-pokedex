import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardInfoDetails = () => {
  return (
    <View style={style.DetailsContainer}>
      <View style={style.CardInfoDetails}></View>
    </View>
  )
}

const style = StyleSheet.create({
  DetailsContainer: {
    backgroundColor: '#F51A16',

    width: 320,
    height: 250,
    //padding: 12,
    borderRadius: 14,
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    marginTop: 6,
    borderWidth: 2,
    borderColor: 'white'
  },

  DetailsCardText: {
    backgroundColor: 'gray',

    margin: 12,
    padding: 12,

    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'black'
  }
})

export default CardInfoDetails
