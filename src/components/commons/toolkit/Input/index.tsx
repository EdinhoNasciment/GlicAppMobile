import React from 'react'
import { Text, TextInput, TextInputProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import SugarSenseTheme from '../../../../global/theme/index'
import {
  Container,
  ContainerProps,
  StyledTextInput,
  StyledTextInputProps
} from './styles'

interface InputProps extends TextInputProps {
  label?: string
  errorMessage?: string

  containerStyleProps?: ContainerProps
  inputStyleProps?: StyledTextInputProps
}

export const Input = React.forwardRef<TextInput, InputProps>(
  (
    { label, containerStyleProps, inputStyleProps, errorMessage, ...rest },
    ref
  ) => {
    return (
      <Container {...containerStyleProps}>
        {label && (
          <Text
            style={{
              fontSize: RFValue(16),
              fontWeight: '400',
              color: SugarSenseTheme.colors.textPrimary,
              marginBottom: RFValue(4)
            }}
          >
            {label}
          </Text>
        )}

        <StyledTextInput
          isError={!!errorMessage}
          ref={ref}
          {...inputStyleProps}
          {...rest}
        />

        {!!errorMessage && (
          <Text
            style={{
              fontSize: RFValue(16),
              fontWeight: '400',
              color: SugarSenseTheme.colors.textPrimary,
              marginVertical: RFValue(4)
            }}
          >
            {errorMessage}
          </Text>
        )}
      </Container>
    )
  }
)
