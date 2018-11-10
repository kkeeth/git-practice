module.exports = {
  mode: 'development',
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      }
    ]
  }
}