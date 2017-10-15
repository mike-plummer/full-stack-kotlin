var path = require('path');
var HtmlWebpackPlugin = require('./build/node_modules/html-webpack-plugin');

module.exports = {
  entry: './js/client.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve('js'), path.resolve('..', 'src'), path.resolve('.'), path.resolve('node_modules'), path.resolve('node_modules/semantic-ui-css')],
    extensions: ['.jsx', '.js', '.css']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fullstack Kotlin',
      filename: 'index.html'
    })
  ]
};
