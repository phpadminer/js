const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'dist')
    },
    module:{
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode:"development"
};