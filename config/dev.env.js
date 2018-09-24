var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const hosturl = 'http://localhost:8099'
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  hosturl: hosturl
})
