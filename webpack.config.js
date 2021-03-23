const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const generateFilename = ext => isDev ?
    `[name].${ext}` :
    `[name].[contenthash].${ext}`;


module.exports = {
    entry: {
        main: './index.js',
    },
    output: {
        filename: generateFilename('js'),
        path: path.resolve(__dirname, 'build'),
        clean: true,
        environment: {
             // The environment supports arrow functions ('() => { ... }').
            arrowFunction: false,
        },
        
    },
    mode,
    context: path.resolve(__dirname, 'src'), 
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        //здесь типа CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },
            {
                test:/\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif|eot|ttf|woff|woff2|otf)$/i,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase:'./build',
        open:true,
    }
}