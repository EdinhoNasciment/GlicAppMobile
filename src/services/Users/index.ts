import { AxiosInstance } from 'axios'

export class Users {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  public async createUser(name: string, email: string, password: string) {
    const { data } = await this.instance.post('/users', {
      name,
      email,
      password
    })

    return data
  }

  public async session(email: string, password: string) {
    const { data } = await this.instance.post('/users/session', {
      email,
      password
    })

    return data
  }

  public async updateUser(token: string, name?: string, password?: string) {
    const { data } = await this.instance.put(
      '/users',
      {
        name,
        password
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return data
  }
}
