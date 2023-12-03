import { IUser } from '../../../../hooks/authHook'
import { API } from '../../../../services'
import { RootStackPropsNavigation } from '../../../../types/routes'

export interface EditProfileModalProps {
  removeSession(): Promise<void>
  setUserData(userData: IUser): void
  userData: IUser | null
  api: API
  navigation: RootStackPropsNavigation
}
