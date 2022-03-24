import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getUserInfo',
    method: 'post',
    response: ({ body }: any) => {
      const { account, password } = body
      return {
        code: 200,
        data: {
          account,
          nickname: '@cname',
          age: '@integer(10-100)',
          uid: '@id',
          url: '@image',
          city: '@city',
          country: '@county(true)',
          province: '@province',
          mobile_phone: '@phone',
          email: '@email',
          region: '@region'
        }
      }
    }
  }
] as MockMethod[]
