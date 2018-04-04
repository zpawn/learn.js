const path = require('path'),
    autoprefixer = require('autoprefixer');

module.exports = {
    /**
     * Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.
     * - development: Provides `process.env.NODE_ENV` with value `development`. Enables `NamedModulesPlugin`
     * - production: Provides `process.env.NODE_ENV` with value production. Enables `UglifyJsPlugin`,
     *  `ModuleConcatenationPlugin` and `NoEmitOnErrorsPlugin`.
     *
     *  or pass it as a CLI argument: `webpack --mode=production`
     */
    mode: 'development',

    // input
    entry: './src',

    // output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // compatibility with React & ReactDOM
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    },

    //transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['env', 'stage-2'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoader: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
        ]
    },

    // sourcemaps
    devtool: 'source-map',

    // server
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
}
