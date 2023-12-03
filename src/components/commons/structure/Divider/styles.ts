import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export interface ContainerProps {
  variant: 'horizontal' | 'vertical'
  color?: string

  height?: string
  width?: string
}

export const Container = styled.View<ContainerProps>`
  width: ${({ variant, width }) =>
    variant === 'vertical' ? '1px' : width || `${RFValue(16)}px`};
  height: ${({ variant, height }) =>
    variant === 'vertical' ? height || `${RFValue(16)}px` : '1px'};

  background-color: ${({ theme, color }) =>
    color || theme.colors.backgroundColorDivider};
`
