/* eslint-disable @typescript-eslint/no-var-requires */
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CssMinimizer = require('css-minimizer-webpack-plugin');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/conjure-animals/latest/',
    },
    optimization: {
        minimizer: [new CssMinimizer(), '...'],
    },
};

module.exports = merge(commonConfig, prodConfig);
