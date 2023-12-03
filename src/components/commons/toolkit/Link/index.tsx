import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import SugarSenseTheme from '../../../../global/theme'

interface LinkProps extends TouchableOpacityProps {
  label: string
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  marginBottom?: number
}

export const Link: React.FC<LinkProps> = ({
  label,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        marginTop,
        marginLeft,
        marginRight,
        marginBottom
      }}
      {...props}
    >
      <Text
        style={{
          fontSize: RFValue(12),
          fontWeight: '400',
          color: SugarSenseTheme.colors.textPrimary
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
