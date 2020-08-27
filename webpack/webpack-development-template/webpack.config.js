const {resolve,join} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //将解析好的css写入到style标签中插入到head中
                    'style-loader',
                    //赋予webpack解析css功能
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 赋予webpack解析less文件功能
                    'less-loader'
                ]
            },
            {
                // 对以jpg|png|gif图片的后缀进行打包，仅对于 background-image的图片有效
                test: /\.(png|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]_[hash:10].[ext]", //定义图片打包后的命名规则
                            limit: 2048, // 不超过这个大小的图片会被转化为base64格式
                            esModule:false // 不开启es6模块引用
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                loader: "html-loader"
            },
            {
                // 除了下面的文件之外的资源的处理loader
                exclude: /\.(html|png|jpeg|jpg|gif|less|css|js)$/,
                loader: "file-loader",
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development",
    devServer: {
        contentBase:join(__dirname,'dist'),
        compress:true,
        port:9000,
        open:true,
    }
};
