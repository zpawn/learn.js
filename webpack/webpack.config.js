const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'prod';

const config = {
    entry: {
        home: './src/Home/index.js',
        feed: './src/Feed/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                })
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [["env", {
                                targets: {
                                    browsers: ["last 2 versions", "ie >= 11"]
                                }
                            }]],
                            plugins: ['lodash']
                        }
                    }
                ]
            }
        ]
    },
    plugins: []
};

if (isProd) {
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new ExtractTextPlugin('feed.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"prod"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]);
} else {
    config.plugins = config.plugins.concat([
        new ExtractTextPlugin({
            filename: 'feed.css',
            disable: true
        }),
    ]);

    config.module.rules[0].use = ['css-hot-loader'].concat(config.module.rules[0].use);

    config.devServer = {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/feed/',
        port: 9000,
        proxy: {
            '/data': 'http://localhost:3000'
        },

    };
}

module.exports = config;
