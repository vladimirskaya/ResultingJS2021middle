const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const generateFilename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    entry: { 
        main: './index.js'
    },
    output: {
        filename: `./js/${generateFilename('js')}`,
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
        environment: {
            arrowFunction: false,
        },

    },
    mode,
    context: path.resolve(__dirname, 'src'), 
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev
            },
        }),
        // new MiniCssExtractPlugin({
        //     filename: `./css/${generateFilename('css')}`
        // }),

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
                use: [ 'style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext][query]'
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
        open: true, 
        hot: isDev, 
        port: 8082,
        compress: true,
        overlay: true,
        writeToDisk: true,
        historyApiFallback: true,
    },
}