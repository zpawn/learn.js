let lesson = '03',
    typeWork = 'tasks',
    project = 'expenses';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, `lesson.${lesson}`, typeWork, project, 'public', 'build');

const webpackConfig = {
    entry: path.resolve(__dirname, `lesson.${lesson}`, typeWork, project, 'src', 'App.jsx'),
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
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname, `lesson.${lesson}`, typeWork, project, 'public'),
        publicPath: '/build/',
        host: '0.0.0.0',
        port: 9000,
        inline: true
    }
};

module.exports = webpackConfig;
