import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const cardImage = (props) => {
  return(
  <View style = {styles.imageContainer}>

      <Image source ={{uri: props.text}} style = {styles.imageStyle}>

      </Image>

  </View>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor: '#C4C4C4',
        borderRadius: 14,
        width: 320,
        height: 400,
        marginTop: 16,
        marginHorizontal: 16
    },
    imageStyle: {
        alignSelf:'center',
        width: 200,
        height: 200,
        
    }

})


export default cardImage
