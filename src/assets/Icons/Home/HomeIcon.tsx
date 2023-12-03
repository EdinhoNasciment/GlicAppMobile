import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface HomeIconProps {
  color: string
}

export const HomeIcon = ({ color }: HomeIconProps): JSX.Element => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
    <Path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
  </Svg>
)
