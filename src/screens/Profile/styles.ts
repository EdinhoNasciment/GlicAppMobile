import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  padding-bottom: ${getBottomSpace()}px;
`

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  margin-top: ${RFValue(32)}px;
  margin-bottom: ${RFValue(32)}px;

  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;
`
