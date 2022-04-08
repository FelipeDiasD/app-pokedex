import React from 'react'
import {StyleSheet, View, Text} from 'react-native'



const TypeCard = (props) => {
    return(
        <View styles = {styles.cardType}>
        
          <View style = {styles.typeFrame}>
            
              <Text style = {styles.textType}>
                {props.text}
              </Text>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    typeFrame: {
        flex: 1,
        //position: 'absolute',
        //width: 15,
        //height: 10,
        borderRadius: 16,
        backgroundColor: 'white',

    },
    cardType:{
        position: 'absolute',
        backgroundColor:'#C4C4C4',
        borderRadius: 14,
        width: 94,
        height:212,
        marginRight:12,
        borderWidth: 2
    },
    
    textType:{
            fontWeight: 'bold',
            fontSize: 24
        }
},

)

export default TypeCard