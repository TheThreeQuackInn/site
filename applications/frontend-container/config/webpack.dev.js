/* eslint-disable @typescript-eslint/no-var-requires */

const {merge} = require('webpack-merge');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                conjureanimals: 'conjureanimals@http://localhost:8081/remoteEntry.js',
            },
            shared: {
                ...packageJson.dependencies,
                react: {
                    version: packageJson.dependencies.react,
                    singleton: true,
                },
                'react-dom': {
                    version: packageJson.dependencies['react-dom'],
                    singleton: true,
                },
            },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
