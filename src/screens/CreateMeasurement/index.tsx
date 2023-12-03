import React from 'react'
import { StatusBar } from 'react-native'

import { KeyboardDismiss } from '../../components/commons/structure/KeyboardDismiss'
import { useAuth } from '../../hooks/authHook'
import { useAPI } from '../../services'
import { FormModal } from './components/FormModal'
import { Container, Content } from './styles'

export const CreateMeasurement: React.FC = () => {
  const { userData } = useAuth()
  const { api } = useAPI()

  if (!userData) return null

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardDismiss>
        <Container>
          <Content>
            <FormModal api={api} userData={userData} />
          </Content>
        </Container>
      </KeyboardDismiss>
    </>
  )
}
