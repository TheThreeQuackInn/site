/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.join(__dirname, '../../../packages/client/common/postcss.config.js'),
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                include: path.resolve(__dirname, '../src'),
                test: /\.css$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.join(__dirname, '../../../packages/client/common/postcss.config.js'),
                            },
                        },
                    },
                ],
            },
            {test: /\.(png|jpe?g|gif|svg)$/i, loader: 'file-loader'},
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin({
            filename: 'container.[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
};
