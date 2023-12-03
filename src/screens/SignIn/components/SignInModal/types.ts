import { IUser } from '../../../../hooks/authHook'
import { API } from '../../../../services/'
import { RootStackPropsNavigation } from '../../../../types/routes'

export interface SignInModalProps {
  createSession(userInfo: IUser): Promise<void>
  api: API
  navigation: RootStackPropsNavigation
}
