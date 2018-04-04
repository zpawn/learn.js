const path = require('path');

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

    //transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
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
