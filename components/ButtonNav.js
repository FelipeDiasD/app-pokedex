import React from 'react'
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native'


const ButtonNav = (props) =>{

    if(props.disable == false){
        styles.buttonStyle.color
    }

return(
 

<TouchableOpacity style = {styles.buttonFrame}>
    
        <Button title = {props.text}
                style = {styles.buttonStyle}
                onPress={ 
                   props.update
                }
                disable = {props.disable}
                
                
                />
</TouchableOpacity>


)
}

const styles = StyleSheet.create({
    buttonFrame: {
        backgroundColor: 'red',
        marginHorizontal: 16,
        margin: 5,
        borderRadius: 12,
        borderWidth: 3
        
        
        

    },
    buttonStyle: {
        
        borderRadius: 12,
        //color: 'red',
        borderRadius: 16,
        backgroundColor: 'red',
        
    },
}
)

export default ButtonNav