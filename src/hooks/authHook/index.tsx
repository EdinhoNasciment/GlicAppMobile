import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IUser {
  userId: string
  name: string
  email: string
  token: string
}

interface IUserProps {
  userData: IUser | null
  setUserData(userData: IUser): void
  createSession(userInfo: IUser): Promise<void>
  removeSession(): Promise<void>
}

const AuthContext = createContext<IUserProps>({} as IUserProps)

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userData, setUserData] = useState<IUser | null>(null)

  const getUserDataFromAS = async () => {
    const userDataFromAS = await AsyncStorage.getItem('@sugarSense/userData')

    if (userDataFromAS) {
      const formattedUserData: IUser = JSON.parse(userDataFromAS)
      setUserData(formattedUserData)
    }
  }

  const createSession = async ({ userId, name, email, token }: IUser) => {
    setUserData({ userId, name, email, token })

    await AsyncStorage.setItem(
      '@sugarSense/userData',
      JSON.stringify({ userId, name, email, token })
    )
  }

  const removeSession = async () => {
    setUserData(null)

    await AsyncStorage.removeItem('@sugarSense/userData')
  }

  useEffect(() => {
    getUserDataFromAS()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        createSession,
        removeSession
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }
