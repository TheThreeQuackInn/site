/* eslint-disable @typescript-eslint/no-var-requires */
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/',
    },
    devServer: {
        port: 8081,
        hot: true,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
};

module.exports = merge(commonConfig, devConfig);
