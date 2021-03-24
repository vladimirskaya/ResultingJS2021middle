const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const generateFilename = ext => isDev ?
    `[name].${ext}` :
    `[name].[contenthash].${ext}`;

module.exports = {
    entry: { //тут должен быть объект, или массив
        main: ['./index.js', './mozaika.html', './schelkovo.html']
        //mozaika: './mozaika.html'
        //schelkovo: 
    },
    output: {
        filename: `./js/${generateFilename('js')}`,
        path: path.resolve(__dirname, 'build'),
        clean: true,
        environment: {
            // The environment supports arrow functions ('() => { ... }').
            arrowFunction: false,
        },

    },
    mode,
    context: path.resolve(__dirname, 'src'), // это базовая директория, абсл.путь, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            minify: false,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${generateFilename('css')}`
        }),
        
    ],
    module: {
        rules: [{
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
                test: /\.css$/i,
                use: [{
                    loader:  MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    }
                }, 
                    'css-loader']
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource',
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[path][name].[ext]'
            //         }
            //     }
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            }
        ]
    },
    devServer: {
        contentBase: './build',
        open: true, //открытый порт
        hot: true, //  перезагрузка на горячую
        port: 8081,
        compress: true,
        overlay: true,
        writeToDisk: true,
        historyApiFallback: true,
    },
    devtool: isDev && 'source-map',
}