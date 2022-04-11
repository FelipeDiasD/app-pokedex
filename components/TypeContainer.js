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
       
        
        backgroundColor:'#C4C4C4',
        borderRadius: 14,
        //margin: 12,
        width: 94,
        height:212,
        //marginHorizontal:12
    }
    

      
})