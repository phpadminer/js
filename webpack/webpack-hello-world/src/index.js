/*
webpack 基础的打包命令
    webpack inputFilePathName -o outputFilePathName --mode=production/development
webpack 开发模式和生产模式的区别
1. 生产模式会压缩和混淆代码
 */

function add (x,y){
    return x+y;
}

console.log(add(1, 2));