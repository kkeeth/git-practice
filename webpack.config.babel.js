const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
}