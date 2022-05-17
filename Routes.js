import React from 'react'
import { createStackNavigator} from '@react-navigation/native-stack';

const stack = createStackNavigator()

import Home from './src/screens/Home/Home'
import Details from './src/screens/Details/Details'

export default function Routes () {

    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Home' component = {Home} />
            <Stack.Screen name = 'Details' component = {Details}/>
        </Stack.Navigator>
    )


}