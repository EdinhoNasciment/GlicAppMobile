import React, { PropsWithChildren } from 'react'

import { AuthProvider } from './authHook'

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)
