import * as path from 'path'
import * as webpack from 'webpack'
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'

/**
 * webpack 은 js, json 만 읽을 수 있는데 Loader 를 통해서 다른 언어, 파일 등을 읽을 수 있다...
 * */
let config: webpack.Configuration = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: path.resolve(__dirname, '../dist'),
    chunkFilename: '[name].[hash].js'
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
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
  },
  devtool: 'source-map',
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = config
