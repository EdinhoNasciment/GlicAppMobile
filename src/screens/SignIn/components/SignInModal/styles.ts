import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  margin-top: ${RFValue(32)}px;
  margin-bottom: ${RFValue(32)}px;

  margin-left: ${RFValue(8)}px;
  margin-right: ${RFValue(8)}px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${RFValue(64)}px;
`

export const LinkGroups = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  margin-bottom: ${RFValue(24)}px;
  margin-top: ${RFValue(24)}px;
`

export const GroupDivider = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;

  margin-bottom: ${RFValue(24)}px;
`
