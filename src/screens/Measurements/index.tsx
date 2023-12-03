import { format } from 'date-fns'
import React, { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StatusBar,
  Text,
  View
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { RFValue } from 'react-native-responsive-fontsize'
import Toast from 'react-native-toast-message'

import { Divider } from '../../components/commons/structure/Divider'
import { Button } from '../../components/commons/toolkit/Button'
import SugarSenseTheme from '../../global/theme'
import { useAuth } from '../../hooks/authHook'
import { useAPI } from '../../services'
import { IMeasurement } from '../../types/Measurement'
import { Container, Content } from './styles'

export const Measurements: React.FC = () => {
  const { userData } = useAuth()
  const { api } = useAPI()

  const [viewStyle, setViewStyle] = useState('graph')
  const [measurements, setMeasurements] = useState<IMeasurement[]>([])
  const [isLoadingList, setIsLoadingList] = useState(true)

  useEffect(() => {
    if (userData) {
      api.measurement
        .getMeasurement(userData.token)
        .then(data => setMeasurements(data))
        .catch(error => console.log({ getMeasurementError: error }))
        .finally(() => setIsLoadingList(false))
    }
  }, [userData])

  const handleReload = async () => {
    try {
      setIsLoadingList(true)

      const data = await api.measurement.getMeasurement(userData?.token ?? '')

      setMeasurements(data.sort((a, b) => b.createdAt - a.createdAt))
    } catch (handleReloadError) {
      console.error({ handleReloadError })
    } finally {
      setIsLoadingList(false)
    }
  }

  const handleDeleteMeasurement = async (measurementId: string) => {
    await api.measurement.deleteMeasurement(
      measurementId,
      userData?.token ?? ''
    )

    Toast.show({
      type: 'success',
      text1: 'Medição excluida com sucesso'
    })

    setTimeout(() => {
      api.measurement
        .getMeasurement(userData?.token ?? '')
        .then(data => setMeasurements(data))
        .catch(error => console.log({ getMeasurementError: error }))
        .finally(() => setIsLoadingList(false))
    }, 2000)
  }

  const renderItem = useCallback(
    (item: IMeasurement) => (
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <View
          style={{
            flex: 1,
            width: RFValue(250),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: RFValue(8)
          }}
        >
          <Text style={{ fontSize: RFValue(18) }}>{item.value} mg/dL</Text>
          <Text style={{ fontSize: RFValue(18) }}>
            {format(new Date(item.createdAt), 'dd/MM HH:mm')}
          </Text>
        </View>

        <Button
          variant="secondary"
          label="Apagar Marcação"
          width="175px"
          marginBottom="8px"
          onPress={() => handleDeleteMeasurement(item.measurementId)}
        />

        <Divider variant="horizontal" width={RFValue(2500) + 'px'} />
      </View>
    ),
    []
  )

  const keyExtractor = useCallback(
    (item: IMeasurement) => item.measurementId,
    []
  )

  if (!userData) return null

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Container>
        <Content>
          <Text
            style={{
              color: SugarSenseTheme.colors.textPrimary,
              textAlign: 'center',
              fontSize: RFValue(14),
              fontWeight: '600',
              marginBottom: RFValue(8)
            }}
          >
            Últimas medições
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: RFValue(12)
            }}
          >
            <Button
              variant={viewStyle === 'list' ? 'primary' : 'secondary'}
              label="Lista"
              width="100px"
              onPress={() => setViewStyle('list')}
            />

            <Button
              variant={viewStyle === 'graph' ? 'primary' : 'secondary'}
              label="Gráfico"
              width="100px"
              onPress={() => setViewStyle('graph')}
            />
          </View>

          {isLoadingList ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ActivityIndicator
                size="large"
                color={SugarSenseTheme.colors.textSecondary}
              />
            </View>
          ) : measurements.length > 0 ? (
            <>
              {viewStyle === 'list' ? (
                <FlatList
                  data={measurements}
                  keyExtractor={keyExtractor}
                  renderItem={({ item }) => renderItem(item)}
                />
              ) : (
                <LineChart
                  style={{ flex: 1, marginBottom: RFValue(32) }}
                  data={{
                    labels: measurements
                      .slice(0, 4)
                      .map(measurement =>
                        format(new Date(measurement.createdAt), 'dd/MM HH:mm')
                      ),
                    datasets: [
                      {
                        data: measurements
                          .slice(0, 4)
                          .map(measurement => Number(measurement.value)),
                        color: (opacity = 1) => `rgba(248, 134, 2, ${opacity})`,
                        strokeWidth: 2
                      }
                    ]
                  }}
                  chartConfig={{
                    backgroundGradientFrom: '#FFFFFF',
                    backgroundGradientTo: '#FFFFFF',
                    strokeWidth: 1,
                    color: (opacity = 1) => `rgba(22, 39, 102, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(22, 39, 102, ${opacity})`,
                    barPercentage: 0.5
                  }}
                  width={Dimensions.get('window').width}
                  height={Dimensions.get('window').height - 300}
                  bezier
                />
              )}
            </>
          ) : (
            <Text
              style={{
                fontSize: RFValue(14),
                color: SugarSenseTheme.colors.textPrimary
              }}
            >
              Nenhuma medição registada
            </Text>
          )}

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              variant="secondary"
              onPress={() => handleReload()}
              label="Recarregar"
              width="250px"
            />
          </View>
        </Content>
      </Container>
    </>
  )
}
