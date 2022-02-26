

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardType(){
    return(
    <View style = {styles.cardShowType}>
        <Text style = {styles.textFormat}>
        
        FIRE
        
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    
    cardShowType: {
      backgroundColor: 'gray',
      //justifyContent: 'center',
      //alignContent: 'center',
      borderRadius: 6,
      padding: 5
      

    },
    textFormat:{
        color : 'red',
        fontSize: 40
    }
})