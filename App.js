import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardInfo from './CardInfoPoke';
import CardType from './cardTypePoke';

export default function App () {
  return (
    <View style={[styles.container, {flexDirection: 'column-reverse'}]}>
      
    
      <View style = {styles.containerCard}>
        <CardInfo/>
      </View>
      <View style = {styles.containerDescription}>
        <View style = {styles.containerType}>
           <CardType/>
        </View>
        
      </View>
      
      <StatusBar style="auto" />

    
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    flexDirection: 'column',
    padding: 30,
  },
  containerCard:{
    flex:1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
    padding: 8
    
 },
 containerDescription:{
   flex:3,
   flexDirection: 'row-reverse',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
   backgroundColor: '#C9C9C9',
   
 },
 containerType:{
   flex:2,
   flexDirection:'row-reverse',
   flexWrap: 'wrap',
   backgroundColor: 'black'
   
 }
 
  
 

  
});

