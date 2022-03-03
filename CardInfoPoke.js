import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardInfo (){
    return(
    <View style = {styles.cardShowDesc}>
        
        <Text style = {styles.textFormat}>
        
        It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.
        
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    
    cardShowDesc: {
      backgroundColor: '#C9C9C9',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 6,
      padding: 50,
      

    },
    textFormat:{
        color : 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'left'
    }
})