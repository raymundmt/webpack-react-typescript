const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const federationConfig = {
    name: "host",
    remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js",
    },
    shared: {
        react: {
            singleton: true,
            eager: true
        },
        'react-dom': {
            singleton: true,
            eager: true
        }
    },
}

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ModuleFederationPlugin(federationConfig),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};