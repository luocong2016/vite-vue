import request from '@/utils/request'

export function userInfo(data: any) {
  return request({
    url: '/api/getUserInfo',
    method: 'post',
    data
  })
}
