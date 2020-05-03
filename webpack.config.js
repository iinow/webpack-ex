const { Plugin, Compiler } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * webpack 은 js, json 만 읽을 수 있는데 Loader 를 통해서 다른 언어, 파일 등을 읽을 수 있다...
 * */

module.exports = {
  mode: 'production', //mode 의 default 값은 production 이다
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // plugins: [
  //   new HtmlWebpackPlugin()
  // ]
}
