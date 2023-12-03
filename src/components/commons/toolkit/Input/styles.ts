import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export interface ContainerProps {
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string

  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
}

export interface StyledTextInputProps {
  isError?: boolean
  isMultiline?: boolean
  borderRadius?: string
  width?: string
  height?: string
}

export const Container = styled.View<ContainerProps>`
  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};

  padding-top: ${({ paddingTop }) => paddingTop || '0px'};
  padding-right: ${({ paddingRight }) => paddingRight || '0px'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0px'};
`

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  border: 1px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.textError : theme.colors.borderColorInput};

  background-color: ${({ theme }) => theme.colors.backgroundColorInput};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius || theme.layout.borderRadiusInput};

  padding-left: ${RFValue(16)}px;
  padding-top: ${({ isMultiline }) => (isMultiline ? RFValue(16) : 0)}px;
  padding-bottom: ${({ isMultiline }) => (isMultiline ? RFValue(16) : 0)}px;
  padding-right: ${RFValue(16)}px;

  color: black;

  width: ${({ width }) => width || `${RFValue(300)}px`};
  height: ${({ height }) => height || `${RFValue(48)}px`};
`
