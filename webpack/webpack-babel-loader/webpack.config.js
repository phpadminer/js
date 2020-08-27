const {resolve, join} = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

const commonCssRule = [MiniCssExtractPlugin.loader,//用来将css从js中提取成一个单独的css 文件
    'css-loader',
    {
        loader: "postcss-loader",
        options: {
            ident: "postcss",
            plugins: [
                require('postcss-preset-env')()//用来解决兼容性问题的
            ]
        }
    }];
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    ...commonCssRule
                ]
            },
            {
                test: /\.less$/,
                use: [
                    ...commonCssRule,
                    'less-loader'
                ]
            },
            {
                test: /\.html$/,//解决html文件映入图片问题
                loader: "html-loader"
            },
            {
                test: /\.(jpeg|jpg|png|git)$/,
                use: [
                    {
                        loader: "url-loader", options: {
                            limit: 2048,//低于2K的图片资源会被转化为base64路径
                            name: "[hash:10].[ext]",
                            esModule: false
                        }
                    }
                ]
            },
            {
                // 除了下面的文件之外的资源的处理loader
                exclude: /\.(html|png|jpeg|jpg|gif|less|css|js)$/,
                loader: "file-loader",
            },
            {
                /*
                     处理js兼容性问题
                     1. 基本js 兼容性处理 @babel/preset-env
                     问题：只会转换基本语法，如 promise不能转换
                     2. 全部JS兼容性 @babel/polyfill
                     问题：会将所有的兼容性代码全部引入，体积太大！~
                     3.按需加载 core-js
                 */

                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: "usage",
                                corejs:{
                                    version:3
                                },
                                targets:{
                                    chrome:'60',
                                }
                            }

                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'src/index.html'),
            minify: {
                // 移除html中的空格
                collapseWhitespace:true,
                // 移除html中注释
                removeComments:true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new optimizeCssAssetsWebpackPlugin()
    ],
    mode: "development",
    devServer: {
        open: true,
        contentBase: join(__dirname, 'dist'),
        port: 1234,
        compress: true
    }
};