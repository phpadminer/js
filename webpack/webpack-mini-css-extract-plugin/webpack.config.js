const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "production";
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "./js/built.js",
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        // 配合loader将css从js中分离出来
        new MiniCssExtractPlugin({
            filename: "css/main1.css"
        }),
        //压缩css文件
        new OptimizeCssAssetsWebpackPlugin()
    ],
    mode: "development"
};