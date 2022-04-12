import React from 'react'
import {StyleSheet, View, Text} from 'react-native'



const TypeCard = (props) => {
    return(
        
        
          <View style = {styles.typeFrame}>
            
              <Text style = {styles.textType}>
                {props.text}
              </Text>

           </View>
        
    )
}

const styles = StyleSheet.create({
    typeFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 40,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: '#929292',
        fontVariant: ['small-caps']

    },
    
    
    textType:{
            fontWeight: 'bold',
            fontSize: 20
        }
},

)

export default TypeCard