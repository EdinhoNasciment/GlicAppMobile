import LinearGradient from 'react-native-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export interface ContainerProps {
  variant?: 'primary' | 'secondary'

  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string

  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string

  width?: string
  height?: string
}

const VariantButton = {
  primary: css``,
  secondary: css`
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 1px;
    background-color: transparent;
  `
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ variant }) => VariantButton[variant || 'primary']}

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.layout.borderRadiusButton};

  margin-top: ${({ marginTop }) => marginTop || '0px'};
  margin-right: ${({ marginRight }) => marginRight || '0px'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};

  padding-top: ${({ paddingTop }) => paddingTop || '0px'};
  padding-right: ${({ paddingRight }) => paddingRight || '0px'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0px'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0px'};

  width: ${({ width }) => width || `${RFValue(300)}px`};
  height: ${({ height }) => height || `${RFValue(48)}px`};
`

export const LinearBackground = styled(LinearGradient)`
  flex: 1;
  align-self: stretch;
  flex-direction: row;

  border-radius: ${({ theme }) => theme.layout.borderRadiusButton};
  justify-content: center;
  align-items: center;
`
