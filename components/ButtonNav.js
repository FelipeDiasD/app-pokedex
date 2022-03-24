import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'


const ButtonNav = (props) =>{

return(
<View style = {styles.buttonFrame}>
  <Button title = {props.text} >
     <View>
         <Text>
            

         </Text>
    </View>
    
   </Button>
</View>

)
}

const styles = StyleSheet.create({
    buttonFrame: {
        //alignSelf: 'stretch',
        position: 'absolute',
        width: 135,
        height: 20,
        backgroundColor: 'white',
        borderWidth: 0.7,
        borderColor: 'black',
        margin: 5
        

    },
}
)

export default ButtonNav