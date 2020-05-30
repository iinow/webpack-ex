import * as path from 'path'
import { smart } from 'webpack-merge'
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import { MyWebpackPlugin } from '../plugins/my-webpack-plugin'

/**
 * webpack 은 js, json 만 읽을 수 있는데 Loader 를 통해서 다른 언어, 파일 등을 읽을 수 있다...
 * */

module.exports = smart({
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: '[name].[hash].js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ]
      },
      {
        test: /\.(png|jpg)$/,
        // loader: 'file-loader',
        loader: 'url-loader',
        options: {
          limit: 20000
        }
        // use: [
        //     'file-loader'
        // ]
      }
    ]
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
    }),
    new MyWebpackPlugin()
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
})
