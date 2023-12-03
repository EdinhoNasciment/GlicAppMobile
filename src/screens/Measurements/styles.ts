import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`

export const ContentSkeleton = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex: 1;

  margin-top: ${RFValue(8)}px;
  padding: ${RFValue(16)}px;

  padding-bottom: ${RFValue(getBottomSpace()) + 20}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const Content = styled.View`
  flex: 1;

  margin-top: ${RFValue(32)}px;
  padding: ${RFValue(16)}px;

  padding-bottom: ${RFValue(getBottomSpace()) + 20}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`

export const MeasurementItem = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  margin-bottom: ${RFValue(4)}px;

  border-radius: ${RFValue(5)}px;
  border-color: ${({ theme }) => theme.colors.borderColorCard};
  border-width: 1px;
`

export const RowViewInfo = styled.View`
  width: 100%;

  margin: ${RFValue(8)}px;
  flex-direction: row;

  align-items: center;
`

export const ViewInfo = styled.View`
  width: 50%;
`
