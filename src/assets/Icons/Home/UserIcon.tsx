import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface UserIconProps {
  color: string
}

export const UserIcon = ({ color }: UserIconProps): JSX.Element => (
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
    <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
)
