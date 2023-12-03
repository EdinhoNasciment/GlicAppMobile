import { isIphoneX } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const Content = styled.View`
  flex: 1;

  margin-top: ${isIphoneX() ? `${RFValue(32)}px` : '0px'};

  flex-direction: column;
  align-items: center;
  justify-content: center;
`
