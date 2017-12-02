const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'lesson.03', 'tasks', 'contacts', 'public', 'build');

const webpackConfig = {
    entry: path.resolve(__dirname, 'lesson.03', 'tasks', 'contacts', 'src', 'app.jsx'),
    output: {
        path: outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/assets/'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname, 'lesson.03', 'tasks', 'contacts', 'public'),
        publicPath: '/build/',
        host: '0.0.0.0',
        port: 9000,
        inline: true
    }
};

module.exports = webpackConfig;
