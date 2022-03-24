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
        height: 464,
        marginTop: 16,
        marginHorizontal: 16
    },
    imageStyle: {
        width: 280,
        height: 405,
        
    }

})


export default cardImage
