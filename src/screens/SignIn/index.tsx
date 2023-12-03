import React from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { KeyboardDismiss } from '../../components/commons/structure/KeyboardDismiss'
import { useAuth } from '../../hooks/authHook'
import { useAPI } from '../../services'
import { RootStackPropsNavigation } from '../../types/routes'
import { SignInModal } from './components/SignInModal'
import { Container, Content } from './styles'

export const SignIn: React.FC = () => {
  const navigation = useNavigation<RootStackPropsNavigation>()

  const { createSession } = useAuth()
  const { api } = useAPI()

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardDismiss>
        <Container>
          <Content>
            <SignInModal
              navigation={navigation}
              createSession={createSession}
              api={api}
            />
          </Content>
        </Container>
      </KeyboardDismiss>
    </>
  )
}
