const { smart } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

/**
 * webpack 은 js, json 만 읽을 수 있는데 Loader 를 통해서 다른 언어, 파일 등을 읽을 수 있다...
 * */
module.exports = smart({
  mode: 'production', //mode 의 default 값은 production 이다
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    // another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: '[name].bundle.js'
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true
    }),   //빌드 된 파일이 전에 빌드된 파일이면 제거한다 -> 항상 최신 빌드 파일들만 모인다.
    new HtmlWebpackPlugin({
      // template: path.join(__dirname, 'src/index.html'),
      title: 'Output Management',
      // inject: false,
      filename: path.join(__dirname, '../dist/index.html')
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
  }
})
