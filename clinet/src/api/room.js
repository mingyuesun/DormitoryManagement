import request from '@/utils/request'

export function getRooms(params) {
  return request({
    url: '/room/getRooms',
    method: 'get',
    params
  })
}

export function getRoomInfo(roomId) {
  return request({
    url: '/room/getRoomInfo',
    method: 'get',
    params: { roomId }
  })
}
