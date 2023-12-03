import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import {
  ErrorToast,
  SuccessToast,
  ToastProps
} from 'react-native-toast-message'

import SugarSenseTheme from '../../../../global/theme'

export const ToastConfig = {
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        color: SugarSenseTheme.colors.textError,
        fontSize: RFValue(14)
      }}
      text2Style={{
        fontSize: RFValue(12)
      }}
      text2NumberOfLines={5}
      activeOpacity={0.2}
      style={{
        borderLeftColor: SugarSenseTheme.colors.textError,
        height: 'auto',
        paddingVertical: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center'
      }}
    />
  ),
  success: (props: ToastProps) => (
    <SuccessToast
      text1Style={{
        color: SugarSenseTheme.colors.primary,
        fontSize: RFValue(14)
      }}
      text2Style={{
        fontSize: RFValue(12)
      }}
      text2NumberOfLines={5}
      activeOpacity={0.2}
      style={{
        borderLeftColor: SugarSenseTheme.colors.primary,
        height: 'auto',
        paddingVertical: RFValue(10),
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...props}
    />
  )
}
