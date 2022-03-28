import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const cardImage = (props) => {
  return(
  <View style = {styles.imageContainer}>
      <Image style = {styles.image} source = {{ uri: props.text}}>
          

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
        height: 464,
        marginTop: 24
    },
    image:{
        width: 250,
        height: 250
    }

})


export default cardImage
