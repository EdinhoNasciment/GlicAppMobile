import { StackNavigationProp } from '@react-navigation/stack'

export type RootStack = {
  SignIn: undefined
  SignUp: undefined
  AppStack: undefined
}

export type HomeStack = {
  Home: undefined
  Profile: undefined
  Appointments: undefined
}

export type DrawerStack = {
  SignIn: undefined
  HomeStack: undefined
}

export type RootStackPropsNavigation = StackNavigationProp<RootStack>
export type DrawerStackPropsNavigation = StackNavigationProp<DrawerStack>
