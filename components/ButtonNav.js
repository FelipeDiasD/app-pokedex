import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'


const ButtonNav = (props) =>{

    if(props.disable == false){
        styles.buttonStyle.color
    }

return(
<View style = {styles.buttonFrame}>


        <Button title = {props.text}
                style = {styles.buttonStyle}
                onPress={ 
                   props.update
                }
                disable = {props.disable}
                
                
                />

</View>
)
}

const styles = StyleSheet.create({
    buttonFrame: {
        color: 'red',
        backgroundColor: 'red',
        marginHorizontal: 16,
        margin: 5,
        borderRadius: 4,
        
        
        

    },
    buttonStyle: {
        color: 'red',
        borderRadius: 16,
        backgroundColor: 'red'
    },
}
)

export default ButtonNav