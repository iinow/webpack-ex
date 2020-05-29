import * as config from './webpack.base.config'
import { smart } from 'webpack-merge'

module.exports = smart(config, {
  devServer: {
    // public: '192.168.0.15:3000',
    // host: '0.0.0.0',
    // watchOptions: {
    //   poll: true
    // }
  }
})