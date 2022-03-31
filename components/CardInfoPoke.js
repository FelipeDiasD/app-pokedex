import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardInfo (props){
    
    return(
    <View style = {styles.cardInfo}>
        
        <View style = {styles.cardStats}>
             <Text style = {styles.textTitle}>
               {props.text}
             </Text>
        </View>

        <View style = {styles.cardType}>

        </View>
          
    </View>
    )
}

const styles = StyleSheet.create({
    
    cardInfo: {
      backgroundColor: '#F51A16',
      alignSelf: 'center',
      width: 320,
      height: 250,
      borderRadius: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:6
      

    },
    cardStats:{
        padding: 8,
        //position: 'absolute',
        backgroundColor:'#C4C4C4',
        borderRadius: 14,
        width: 183,
        height:212,
        marginHorizontal:12,
        //alignItems: 'center',
        justifyContent: 'flex-start'
        

    },cardType:{
        //position: 'absolute',
        //right:0,
        backgroundColor:'#C4C4C4',
        borderRadius: 14,
        //marginVertical: 12,
        width: 94,
        height:212,
        marginRight:12
    },
    textTitle:{
        fontWeight: 'bold',
        textAlign:'left',
        fontSize: 16,
        
    }
})