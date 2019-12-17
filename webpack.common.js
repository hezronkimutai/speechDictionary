 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/server.js',
   },
   plugins: [
     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
   node: {
    fs: 'empty',
    net:'empty'
  },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },
    {test : /\.css$/, use:['style-loader', 'css-loader']},
    {test: /\.(jpg|png)$/, use: { loader: 'url-loader'},}]
  }
 };