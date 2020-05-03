const { Plugin, Compiler } = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

/**
 * webpack 은 js, json 만 읽을 수 있는데 Loader 를 통해서 다른 언어, 파일 등을 읽을 수 있다...
 * */

module.exports = {
  mode: 'production', //mode 의 default 값은 production 이다
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),   //빌드 된 파일이 전에 빌드된 파일이면 제거한다 -> 항상 최신 빌드 파일들만 모인다.
    new HtmlWebpackPlugin({
      // template: path.join(__dirname, 'src/index.html'),
      title: 'Output Management',
      // inject: false,
      // filename: path.join(__dirname, 'dist/index.html')
    })
  ],
  devtool: "source-map"
}
