import React from 'react'
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native'


const Users = () => {

    return(

        <ScrollView style = {styles.homeContainer}>
            
            <Text>
                Users
            </Text>

        </ScrollView>
    )

}



const styles = StyleSheet.create({
homeContainer: {
    backgroundColor: '#9E9E9E'
    
}
})

export default Users