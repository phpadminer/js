const {resolve} = require('path');
module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        filename: "built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [],
    mode: "development"
};