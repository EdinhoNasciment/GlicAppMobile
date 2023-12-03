import React from 'react'
import { ActivityIndicator, Text, TouchableOpacityProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import SugarSenseTheme from '../../../../global/theme/index'
import { Container, ContainerProps, LinearBackground } from './styles'

interface ButtonProps extends TouchableOpacityProps, ContainerProps {
  label?: string
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  label,
  isLoading,
  activeOpacity = 0.2,
  variant = 'primary',
  ...rest
}) => {
  return (
    <Container
      variant={variant}
      activeOpacity={activeOpacity}
      disabled={isLoading}
      {...rest}
    >
      {variant === 'primary' ? (
        <LinearBackground
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[
            SugarSenseTheme.colors.secondary,
            SugarSenseTheme.colors.primary
          ]}
        >
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: '400',
              color: SugarSenseTheme.colors.textButton,
              marginRight: isLoading ? RFValue(8) : 0,
              textAlign: 'center'
            }}
          >
            {label}
          </Text>

          {isLoading && (
            <ActivityIndicator
              color={SugarSenseTheme.colors.textButton}
              size="small"
            />
          )}
        </LinearBackground>
      ) : (
        <>
          <Text
            style={{
              fontSize: RFValue(14),
              fontWeight: '400',
              color: SugarSenseTheme.colors.primary,
              marginRight: isLoading ? RFValue(8) : 0,
              textAlign: 'center'
            }}
          >
            {label}
          </Text>

          {isLoading && (
            <ActivityIndicator
              color={SugarSenseTheme.colors.primary}
              size="small"
            />
          )}
        </>
      )}
    </Container>
  )
}
