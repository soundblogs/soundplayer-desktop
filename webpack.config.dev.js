'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './gui/js/app',

    output: {
        path: path.join(__dirname, 'core', 'dist'),
        filename: 'app.js'
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel?stage=0']
        }, {
            test: /\.css$/,
            loaders: ['style', 'css', 'cssnext']
        }]
    }
};
