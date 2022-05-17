import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CardInfo(props) {
  return (
    <View style={styles.cardFrame}>
      <View style={styles.cardInfo}>
        <Text style={styles.textTitle}>{props.text}</Text>
      </View>

      <View style={styles.cardType}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardInfo: {
    padding: 8,
    backgroundColor: '#9E9E9E',
    borderRadius: 14,
    width: 183,
    height: 212,
    //marginVertical:12,
    borderColor: 'black',
    borderWidth: 2,
    //alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
    textTransform: 'uppercase'
  }
})
