import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './home/Home'
import Users from './users/DetailsPoke'
import DetailsPoke from './users/DetailsPoke'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokedéx',
          headerTitleAlign: 'center',
          headerTintColor: 'red'
        }}
      />

      <Stack.Screen name="Details" component={DetailsPoke} />
    </Stack.Navigator>
  )
}

export default Routes
