const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.txt$/,
                use: {
                    loader: "raw-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash]-[name].[ext]',
                            limit: 10000,
                            mimetype: 'application/font-woff',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-react-loader',
                        options: {
                            limit: 10000,
                            encoding: "base64",
                            // fallback defaults to file-loader
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
    },
    devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html.ejs",
            filename: "./index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}
