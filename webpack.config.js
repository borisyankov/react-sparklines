var path = require('path');

var webpack = require('webpack'),
    plugins = [];

module.exports = {
    cache: true,
    entry: {
        demo: [
            './src/demo.js'
        ],
        sparklines: [
            './src/Sparklines.js'
        ],
        libs: [
            'react'
        ]
    },
    output: {
        path: path.join(__dirname, 'demo'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[chunkhash].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel?stage=0'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //devtool: 'source-map',
    plugins: plugins
};
