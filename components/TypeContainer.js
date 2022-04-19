import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import TypeCard from './TypeCardPoke'

export default function TypeContainer(props){


    /*switch(props.text){
        case 'water':
            styles.cardType.backgroundColor = 'blue'
        case 'fire':
            styles.cardType.backgroundColor = 'red'
        case 'grass':
            styles.cardType.backgroundColor = 'green'
        case 'bug':
            styles.cardType.backgroundColor = 'brown'            
    }*/

    return(
        
        <View style = {styles.cardType}>
            <TypeCard text = {props.text}/>

        </View> 
    )
}

const styles = StyleSheet.create({
    cardType:{
        padding: 4,
        alignItems: 'center',
        backgroundColor:'#9E9E9E',
        borderRadius: 14,
        borderColor: 'black',
        borderWidth: 2,
        //margin: 12,
        width: 94,
        height:212,
        //marginHorizontal:12
    }
    

      
})