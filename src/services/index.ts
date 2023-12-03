import axios, { AxiosInstance } from 'axios'

import { Measurements } from './Measurements'
import { Users } from './Users'

export class API {
  private instance: AxiosInstance

  users: Users
  measurement: Measurements

  constructor() {
    this.instance = axios.create({
      // baseURL: 'http://localhost:3333',
      baseURL: 'https://artistic-skunk-glad.ngrok-free.app',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.users = new Users(this.instance)
    this.measurement = new Measurements(this.instance)
  }
}

export const useAPI = () => {
  const api = new API()

  return { api }
}
