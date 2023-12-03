import { IUser } from '../../../../hooks/authHook'
import { API } from '../../../../services'

export interface FormModalProps {
  userData: IUser
  api: API
}
