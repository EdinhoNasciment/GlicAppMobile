import React, { FormEvent, useRef, useState } from 'react'
import { Text, TextInput } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import { Divider } from '../../../../components/commons/structure/Divider'
import { Button } from '../../../../components/commons/toolkit/Button'
import { Input } from '../../../../components/commons/toolkit/Input'
import { Link } from '../../../../components/commons/toolkit/Link'
import SugarSenseTheme from '../../../../global/theme/index'
import { Container, Form, GroupDivider, LinkGroups } from './styles'
import { SignInModalProps } from './types'

export const SignInModal: React.FC<SignInModalProps> = ({
  createSession,
  api,
  navigation
}) => {
  const passwordInputRef = useRef<TextInput>(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitSignIn = async (event: FormEvent) => {
    event.preventDefault()

    if (!email || !password) {
      Toast.show({
        type: 'info',
        text1: 'Ops!',
        text2: 'Complete todos os campos para continuar'
      })

      return
    }

    try {
      setIsLoading(true)

      const userData = await api.users.session(email, password)

      await createSession(userData)

      setEmail('')
      setPassword('')

      navigation.navigate('AppStack')
    } catch (signInError) {
      console.log({ signInError })

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
          keyboardType="email-address"
          label="E-mail"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="next"
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
          // onSubmitEditing={handleSubmitSignIn}
          secureTextEntry
        />

        <Button
          isLoading={isLoading}
          label="Continuar"
          onPress={handleSubmitSignIn}
        />
      </Form>

      <LinkGroups>
        <Link label="Esqueci a senha" marginRight={RFValue(8)} />

        <Divider variant="vertical" />

        <Link label="Estou tendo problemas" marginLeft={RFValue(8)} />
      </LinkGroups>

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
        onPress={() => navigation.navigate('SignUp')}
        label="Cadastre-se já"
      />
    </Container>
  )
}
