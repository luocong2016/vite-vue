import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
  type CancelTokenStatic
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: '/',
  withCredentials: true, // 是否跨站点请求 Access-Control
  timeout: 5000
})

instance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response: AxiosResponse) {
    const { config, data } = response
    const { responseType = 'json' } = config
    switch (responseType) {
      case 'text':
        return data
      case 'json':
        return Number(data.code) === 200
          ? data.data
          : Promise.reject({ ...data })
      default:
        return response
    }
  },
  function (error: AxiosError) {
    return Promise.reject(error)
  }
)

export const CancelToken: CancelTokenStatic = axios.CancelToken

export default instance
