/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new MiniCssExtractPlugin({
            filename: 'conjure-animals.[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new ModuleFederationPlugin({
            name: 'conjureanimals',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/bootstrap.tsx',
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
            },
        }),
    ],
};
