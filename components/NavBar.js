import react from 'react'
import {Image, Text, StyleSheet, View} from 'react-native'


const NavBar = () => {
    return(
        <View style = {styles.navBarContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    navBarContainer:{
        alignSelf: 'center',
        padding: 0.5,
        margin:5,
        borderRadius: 14,
        //justifyContent: 'flex-start',
        width: 320,
        height: 60,
       // flexDirection: 'column', 
        backgroundColor: 'red'     
    }
})

export default NavBar