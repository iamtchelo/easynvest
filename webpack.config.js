const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: 'index.html' }
      ]
    },
    stats: 'errors-only'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/bundle.css',
      disable: false,
      allChunks: true
    })
  ]
}
