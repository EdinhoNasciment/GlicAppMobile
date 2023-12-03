import { AxiosInstance } from 'axios'

export class Measurements {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  public async createMeasurement(value: string, token: string) {
    const { data } = await this.instance.post(
      '/measurement',
      {
        value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return data
  }

  public async getMeasurement(token: string) {
    const { data } = await this.instance.get('/measurement', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return data
  }

  public async deleteMeasurement(measurementId: string, token: string) {
    await this.instance.delete(`/measurement/${measurementId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
