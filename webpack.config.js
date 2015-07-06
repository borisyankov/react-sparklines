var webpack = require('webpack'),
    plugins = [];

module.exports = {
    cache: true,
    entry: './demo/demo',
    output: {
        path: './demo',
        filename: 'index.js'
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
