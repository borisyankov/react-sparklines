var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: {
        index: [
            './index.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
        library: 'react-sparklines',
        libraryTarget: 'commonjs2'
    },
    externals: { react: 'react' },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
