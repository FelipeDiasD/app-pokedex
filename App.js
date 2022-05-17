import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
//
//function App() {
//  return (
//    <NavigationNativeContainer>
//      <Routes />
//    </NavigationNativeContainer>
//  )
//}
//

//
//export default App

function App() {
  return (
    <NavigationContainer  styles={styles.container}>
      <Routes />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App
