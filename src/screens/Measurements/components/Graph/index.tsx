import { format } from 'date-fns'
import React from 'react'
import { Dimensions } from 'react-native'
import { LineChart, LineData } from 'react-native-charts-wrapper'
import { RFValue } from 'react-native-responsive-fontsize'

import { GraphProps } from './types'

export const Graph: React.FC<GraphProps> = ({ measurements }) => {
  if (measurements.length <= 0) return <></>

  return (
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
        labelColor: (opacity = 1) => `rgba(22, 39, 102, ${opacity})`,
        barPercentage: 0.5
      }}
      width={Dimensions.get('window').width}
      height={Dimensions.get('window').height - 300}
      bezier
    />
  )
}
