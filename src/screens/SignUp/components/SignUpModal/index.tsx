import React, { FormEvent, useRef, useState } from 'react'
import { Text, TextInput } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import { Divider } from '../../../../components/commons/structure/Divider'
import { Button } from '../../../../components/commons/toolkit/Button'
import { Input } from '../../../../components/commons/toolkit/Input'
import SugarSenseTheme from '../../../../global/theme/index'
import { Container, Form, GroupDivider } from './styles'
import { SignUpModalProps } from './types'

export const SignUpModal: React.FC<SignUpModalProps> = ({
  createSession,
  api,
  navigation
}) => {
  const emailInputRef = useRef<TextInput>(null)
  const passwordInputRef = useRef<TextInput>(null)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitSignUp = async (event: FormEvent) => {
    event.preventDefault()

    if (!email || !name || !password) {
      Toast.show({
        type: 'info',
        text1: 'Ops!',
        text2: 'Complete todos os campos para continuar'
      })

      return
    }

    try {
      setIsLoading(true)

      const createdUser = await api.users.createUser(name, email, password)

      setEmail('')
      setName('')
      setPassword('')

      Toast.show({
        type: 'success',
        text1: 'Conta criada com sucesso'
      })

      await createSession(createdUser)

      navigation.navigate('AppStack')
    } catch (handleSubmitSignUpError) {
      console.error({ handleSubmitSignUpError })

      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Ocorre um erro, tente novamente em instantes'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Text style={{ color: 'black', fontSize: RFValue(42) }}>Glic APP</Text>

      <Form>
        <Input
          keyboardType="default"
          label="Nome completo"
          autoCapitalize="none"
          onChangeText={value => setName(value)}
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="next"
          onSubmitEditing={() => {
            emailInputRef.current?.focus()
          }}
        />
        <Input
          keyboardType="email-address"
          label="E-mail"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="next"
          ref={emailInputRef}
          onSubmitEditing={() => {
            passwordInputRef.current?.focus()
          }}
        />
        <Input
          label="Senha"
          onChangeText={value => setPassword(value)}
          containerStyleProps={{ marginBottom: `${RFValue(24)}px` }}
          ref={passwordInputRef}
          returnKeyType="join"
          onSubmitEditing={handleSubmitSignUp}
          secureTextEntry
        />

        <Button
          isLoading={isLoading}
          label="Continuar"
          onPress={handleSubmitSignUp}
        />
      </Form>

      <GroupDivider>
        <Divider
          variant="horizontal"
          width={`${RFPercentage(18)}px`}
          color={SugarSenseTheme.colors.borderColorCard}
        />

        <Text
          style={{
            fontSize: RFValue(14),
            fontWeight: '400',
            color: SugarSenseTheme.colors.textSecondary,
            marginHorizontal: RFValue(16)
          }}
        >
          OU
        </Text>

        <Divider
          variant="horizontal"
          width={`${RFPercentage(18)}px`}
          color={SugarSenseTheme.colors.borderColorCard}
        />
      </GroupDivider>

      <Button
        variant="secondary"
        onPress={() => navigation.navigate('SignIn')}
        label="Já tenho conta"
      />
    </Container>
  )
}
