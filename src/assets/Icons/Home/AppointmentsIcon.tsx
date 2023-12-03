import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface AppointmentsIconProps {
  color: string
}

export const AppointmentsIcon = ({
  color
}: AppointmentsIconProps): JSX.Element => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 6L12 12 16 14" />
  </Svg>
)
