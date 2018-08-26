import axios from '@/libs/api.request'
import md5 from 'js-md5'

export const login = ({ userName, password }) => {
  password = md5(password)
  const data = {
    userName,
    password
  }
  console.log(data)
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
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
