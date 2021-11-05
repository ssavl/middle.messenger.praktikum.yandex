const path = require('path');
const webpackPlug = require('html-webpack-plugin');
const copyPlug = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.hbs'],
        alias: {
            handlebars: 'handlebars/dist/handlebars.js',
        },
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new webpackPlug({
            title: 'SuperMessenger',
            template: './src/index.html',
        }),
        new copyPlug({
            patterns: [{ from: 'static', to: 'static' }],
        }),
    ],
};