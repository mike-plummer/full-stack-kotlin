var path = require('path');
var HtmlWebpackPlugin = require('./build/node_modules/html-webpack-plugin');

module.exports = {
  entry: './js/client.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    modules: [ path.resolve('js'), path.resolve('..', 'src'), path.resolve('.'), path.resolve('node_modules') ],
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
