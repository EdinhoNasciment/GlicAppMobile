import React, { FormEvent, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import { Button } from '../../../../components/commons/toolkit/Button'
import { Input } from '../../../../components/commons/toolkit/Input'
import { Container, Form } from './styles'
import { EditProfileModalProps } from './types'

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  removeSession,
  setUserData,
  api,
  userData,
  navigation
}) => {
  const [name, setName] = useState(userData?.name)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitEditProfile = async (event: FormEvent) => {
    event.preventDefault()

    try {
      setIsLoading(true)

      const updatedUser = await api.users.updateUser(
        userData?.token ?? '',
        name ?? '',
        password
      )

      setUserData({ ...userData, ...updatedUser })

      Toast.show({
        type: 'success',
        text1: 'Conta alterada com sucesso'
      })
    } catch (handleSubmitEditProfileError) {
      console.error({ handleSubmitEditProfileError })

      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Ocorre um erro, tente novamente em instantes'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    await removeSession()

    navigation.navigate('SignIn')
  }

  return (
    <Container>
      <Form>
        <Input
          keyboardType="default"
          label="Nome completo"
          autoCapitalize="none"
          onChangeText={value => setName(value)}
          value={name}
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="done"
        />

        <Input
          keyboardType="default"
          label="Senha"
          autoCapitalize="none"
          onChangeText={value => setPassword(value)}
          value={password}
          secureTextEntry
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="done"
        />

        <Button
          isLoading={isLoading}
          label="Atualizar dados"
          onPress={handleSubmitEditProfile}
        />
      </Form>

      <Button
        variant="secondary"
        onPress={handleLogout}
        label="Sair do aplicativo"
      />
    </Container>
  )
}
