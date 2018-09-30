/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 10:55
 * @Copyright(©) 2017 by zzmhot.
 *
 */

import Mock from 'mockjs'
import {portCode, portUser} from 'common/port_uri'

Mock.mock(new RegExp(portUser.login), ({body}) => {
  const {username, password} = JSON.parse(body)
  if (username === 'admin' && password === 'admin') {
    return Mock.mock({
      code: portCode.success,
      msg: "登录成功",
      data: {
        'name': '@cname',
        'avatar': 'https://avatars0.githubusercontent.com/u/16893554?v=3&s=240',
        'age|20-25': 20,
        'desc': '@csentence()'
      }
    })
  } else {
    return Mock.mock({
      code: portCode.error,
      msg: "账号或密码错误"
    })
  }
})

Mock.mock(new RegExp(portUser.logout), {
  code: portCode.success,
  msg: "退出成功"
})
