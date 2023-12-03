import React from 'react'

import { Container, ContainerProps } from './styles'

type DividerProps = ContainerProps

export const Divider: React.FC<DividerProps> = ({ ...rest }) => (
  <Container {...rest} />
)
