const dotenv =require('dotenv');
const webpack = require('webpack');
const path = require('path');

dotenv.config();
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        
        
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        publicPath: "http://localhost:3000/dist",
        historyApiFallback: true,
        port: process.env.PORT || 3000,
        hotOnly: true
    },
}
