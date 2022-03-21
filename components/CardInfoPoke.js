import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardInfo (props){
    return(
    <View style = {styles.cardInfo}>
        
        <View style = {styles.cardStats}>
        <Text>
            {props.Text}
        </Text>
        </View>
        <View style = {styles.cardType}></View>   
    </View>
    )
}

const styles = StyleSheet.create({
    
    cardInfo: {
      backgroundColor: '#F51A16',
    
      width: 320,
      height: 270,
      borderRadius: 14,
      flexDirection: 'row',
      //justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 12
      

    },
    cardStats:{
        padding: 8,
        position: 'absolute',
        left: 0,
        backgroundColor:'#C4C4C4',
        borderRadius: 14,
        width: 183,
        height:249,
        marginHorizontal:12,
        //alignItems: 'center',
        justifyContent: 'flex-start'
        

    },
    cardType:{
        position: 'absolute',
        right:0,
        backgroundColor:'#FFFF',
        borderRadius: 14,
        marginVertical: 12,
        width: 95,
        height:249,
        marginHorizontal:12
    },
    textTitle:{
        fontWeight: 'bold',
        textAlign:'center'
    }
})