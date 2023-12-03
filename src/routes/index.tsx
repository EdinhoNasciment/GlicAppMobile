import { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { useAuth } from '../hooks/authHook'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'
import { RootStack } from '../types/routes'
import { HomeBottomStack } from './HomeBottomStack'

const Stack = createStackNavigator<RootStack>()

export const AppRoutes: React.FC = () => {
  const { userData } = useAuth()

  const [routeName, setRouteName] = useState<'SignIn' | 'AppStack'>()

  useEffect(() => {
    if (userData) {
      setRouteName('AppStack')
    } else {
      setRouteName('SignIn')
    }
  }, [userData, routeName])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{ gestureEnabled: false, headerShown: false }}
      >
        <Stack.Screen
          name="SignIn"
          options={{ gestureEnabled: false }}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          options={{ gestureEnabled: false }}
          component={SignUp}
        />
        <Stack.Screen name="AppStack" component={HomeBottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
