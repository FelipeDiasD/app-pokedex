import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

import CardInfo from './CardInfoPoke'
import TypeContainer from './TypeContainer'

const InfoFrame = (props) => {
    return(
        <View style = {styles.cardFrame}>

            <CardInfo text = {props.text}/>
            <TypeContainer text = {props.textType}/>

        </View>
    )
}




const styles = StyleSheet.create({
cardFrame: {
    
    backgroundColor: '#F51A16',
    padding: 12,
    alignSelf: 'center',
    width: 320,
    height: 250,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    marginTop:6, 
    borderWidth: 2,
    borderColor: 'white'
    
    
  }
})

export default InfoFrame