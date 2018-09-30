import axios from '@/libs/api.request'
import {url} from '@/common/port_uri/base'
export const login = ({ userName, password }) => {
  const data = {
    'username': userName,
    'password': password
  }

  return axios.request({
    url: url + 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: url + 'getCusInfo',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getCaptcha = (userName) => {
  const data = {
    'cellphone': userName
  }
  return axios.request({
    url: url + 'getCaptcha',
    data,
    method: 'post'
  })
}
