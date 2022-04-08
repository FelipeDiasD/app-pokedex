import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

const InfoFrame = () => {
    return(
        <View style = {styles.cardFrame}>

        </View>
    )
}




const styles = StyleSheet.create({
cardFrame: {
    //opacity: 0.3,
    backgroundColor: '#F51A16',
    alignSelf: 'center',
    width: 320,
    height: 250,
    borderRadius: 14,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    marginTop:6, 
    borderWidth: 2
    
    
  }
})

export default InfoFrame