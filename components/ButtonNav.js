import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'


const ButtonNav = (props) =>{



return(
<View style = {styles.buttonFrame}>


        <Button title = {props.text}
                color = 'red'
                onPress={
                    props.update
                }
                />

</View>
)
}

const styles = StyleSheet.create({
    buttonFrame: {
        marginHorizontal: 16,
        margin: 5
        

    },
    buttonStyle: {
        borderRadius: 16
    }
}
)

export default ButtonNav