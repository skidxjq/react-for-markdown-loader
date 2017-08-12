const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cwd = process.cwd()

module.exports = {
  entry: ['webpack-dev-server/client', path.resolve(__dirname, 'src/example.jsx')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.md']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(md)$/,
      loader: path.resolve(__dirname, '../lib')
    }, {
      test: /\.(css|scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          'css-loader', {
            loader: 'postcss-loader'
          },
          'sass-loader?sourceMap'
        ]
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      hash: false,
      filename: path.join(cwd, 'index.html'),
      inject: true
    })
  ]
}