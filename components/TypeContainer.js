import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function TypeContainer(){
    return(
        
        <View style = {styles.cardType}>

        </View> 
    )
}

const styles = StyleSheet.create({
    cardType:{
        //position: 'absolute',
        //right:0,
        backgroundColor:'green',
        borderRadius: 14,
        //marginVertical: 12,
        width: 94,
        height:212,
        //marginHorizontal:12
    }
    

      
})