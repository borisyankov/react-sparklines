var path = require('path');
var webpack = require('webpack')

module.exports = {
    cache: true,
    entry: './demo.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'demo.build.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: []
};
