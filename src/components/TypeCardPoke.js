import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const TypeCard = props => {
  return (
    <View style={styles.typeFrame}>
      <Text style={styles.textType}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  typeFrame: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 85,
    height: 80,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: '#929292',
    fontVariant: ['small-caps']
  },

  textType: {
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase'
  }
})

export default TypeCard
