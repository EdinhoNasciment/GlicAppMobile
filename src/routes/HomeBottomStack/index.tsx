import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from '../../components/commons/structure/TabBar'
import { CreateMeasurement } from '../../screens/CreateMeasurement'
import { Measurements } from '../../screens/Measurements'
import { Profile } from '../../screens/Profile'
import { HomeStack } from '../../types/routes'

const Stack = createBottomTabNavigator<HomeStack>()

export const HomeBottomStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={CreateMeasurement}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Appointments"
        component={Measurements}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  )
}
