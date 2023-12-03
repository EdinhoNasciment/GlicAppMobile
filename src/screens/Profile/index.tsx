import React from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { useAuth } from '../../hooks/authHook'
import { useAPI } from '../../services/index'
import { RootStackPropsNavigation } from '../../types/routes'
import { EditProfileModal } from './components/EditProfileModal'
import { Container, Content } from './styles'

export const Profile: React.FC = () => {
  const { removeSession, userData, setUserData } = useAuth()
  const { api } = useAPI()

  const navigation = useNavigation<RootStackPropsNavigation>()

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Container>
        <Content>
          <EditProfileModal
            navigation={navigation}
            setUserData={setUserData}
            userData={userData}
            removeSession={removeSession}
            api={api}
          />
        </Content>
      </Container>
    </>
  )
}
