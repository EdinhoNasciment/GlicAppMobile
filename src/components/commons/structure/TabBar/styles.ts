import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ContainerProps {
  paddingBottom: number
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  border-top-width: ${RFValue(0.5)}px;
  border-top-color: ${({ theme }) => theme.colors.borderColorTabBar};

  padding-top: ${RFValue(12)}px;
  padding-bottom: ${({ paddingBottom }) => `${RFValue(paddingBottom)}px`};

  flex-direction: row;
`

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.View`
  width: ${RFValue(22)}px;
  height: ${RFValue(22)}px;

  align-items: center;
  justify-content: center;

  margin-bottom: ${RFValue(7)}px;
`
