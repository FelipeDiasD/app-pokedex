import React from 'react'
import { NavigationContainer} from '@react-navigation/native';


import Routes from './Routes'

export default function (){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}