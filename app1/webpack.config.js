const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "system"
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
};