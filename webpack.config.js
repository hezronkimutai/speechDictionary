const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  entry: path.resolve(__dirname, 'build/bundle.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {test : /\.css$/, use:['style-loader', 'css-loader']},
    {test: /\.(jpg|png)$/, use: { loader: 'url-loader'},}]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'build'),
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html" 
    })
  ]
};
