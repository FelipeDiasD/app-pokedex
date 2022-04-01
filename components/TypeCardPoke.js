import React from 'react'
import {StyleSheet, View, Text} from 'react-native'



const TypeCard = (props) => {
    return(
        <View style = {styles.typeFrame}>
            
            <Text style = {styles.textType}>
                props.text
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    typeFrame: {
        position: 'absolute',
        width: 15,
        height: 10,
        borderRadius: 16,
        backgroundColor: 'white',

    },
    textType:{
        fontWeight: 'bold',
        fontSize: 24
    }
})

export default TypeCard