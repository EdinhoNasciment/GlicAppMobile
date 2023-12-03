import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Toast from 'react-native-toast-message'
import { ThemeProvider } from 'styled-components/native'
import 'react-native-gesture-handler'

import { ToastConfig } from './components/commons/structure/Toast'
import SugarSenseTheme from './global/theme'
import { AppProvider } from './hooks'
import { AppRoutes } from './routes'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <AppProvider>
      <ThemeProvider theme={SugarSenseTheme}>
        <AppRoutes />

        <Toast position="top" visibilityTime={2500} config={ToastConfig} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
