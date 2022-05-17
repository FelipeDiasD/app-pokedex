import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './home/Home'
import Users from './users/Users'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokedéx'
        }}
      />

      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  )
}

export default Routes
