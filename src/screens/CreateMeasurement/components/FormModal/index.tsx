import React, { FormEvent, useState } from 'react'
import { Keyboard, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import { Button } from '../../../../components/commons/toolkit/Button'
import { Input } from '../../../../components/commons/toolkit/Input'
import { Container, Form } from './styles'
import { FormModalProps } from './types'

export const FormModal: React.FC<FormModalProps> = ({ api, userData }) => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitMeasurement = async (event: FormEvent) => {
    event.preventDefault()

    if (!value) {
      Toast.show({
        type: 'info',
        text1: 'Ops!',
        text2: 'Complete todos os campos para continuar'
      })

      return
    }

    try {
      setIsLoading(true)

      await api.measurement.createMeasurement(value, userData.token)

      setValue('')

      Keyboard.dismiss()

      Toast.show({
        type: 'success',
        text1: 'Medição cadastrada com sucesso'
      })
    } catch (handleSubmitMeasurementError) {
      console.error({ handleSubmitMeasurementError })

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
          keyboardType="number-pad"
          label="Valor (mg/dL)"
          autoCapitalize="none"
          onChangeText={value => setValue(value)}
          value={value}
          containerStyleProps={{ marginBottom: `${RFValue(8)}px` }}
          returnKeyType="next"
          onSubmitEditing={handleSubmitMeasurement}
        />

        <Button
          isLoading={isLoading}
          label="Cadastrar"
          onPress={handleSubmitMeasurement}
        />
      </Form>
    </Container>
  )
}
