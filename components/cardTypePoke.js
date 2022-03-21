import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function CardType(){
    return(
    <View style = {styles.cardMoldure}>
         
         <View style = {styles.cardShowType}>
        
         
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    
    cardShowType: {
      backgroundColor:'#C4C4',
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 14,
      borderColor: 'red',
      borderWidth: 4,
      
      },
      cardMoldure:{
          backgroundColor:'red',
          justifyContent: 'center',
          alignContent: 'center',
          borderRadius: 6,
          padding: 4
        }

      
})