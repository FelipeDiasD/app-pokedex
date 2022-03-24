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
        margin:5,
        justifyContent: 'flex-start',
        width: 320,
        height: 30,
        flexDirection: 'column', 
        backgroundColor: 'red'     
    }
})

export default NavBar