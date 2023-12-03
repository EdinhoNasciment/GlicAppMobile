import React, { PropsWithChildren } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export const KeyboardDismiss: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  )
}
