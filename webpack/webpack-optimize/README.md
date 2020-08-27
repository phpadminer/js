#webpack性能优化
* 开发环境性能优化
>HMR:hot module replacement 模块热替换

>作用: 一个模块发生变化，只会重新打包这一个模块(而不是打包所有模块)
极大提高构建速度

样式文件：可以使用HMR功能：因为style-loader内部实现了~
js文件：默认不能使用HMR功能
html文件：默认不能使用HMR功能，同时html文件不能热更新了

解决：修改entry入口，将html文件引入。
* 生产环境性能优化

>source-map  一种提供源代码到构建后代码映射技术(如果构建后代码出错了，通过映射可以追踪代码错误)

>source-map(外部)
    错误代码准确信息和源代码的错误位置
>
>inline-source-map (内部)
    只生成一个内联source-map
     错误代码原因和源代码的错误位置
>
>hidden-source-map (外部)
  错误代码原因但是没有错误位置
>
>eval-source-map (内部)
    错误代码的信息和源代码
>
>nosources-source-map (外部)
     错误代码准确信息但是没有任何的源代码信息
>
>cheap-source-map (外部)
 错误代码信息和源代码的错误信息(智能精确到一行)
>cheap-module-shource-map (外部)
>错误代码信息和源代码的错误信息
>
> oneOf loader只会生效一个

>缓存 

>babel缓存

>文件资源缓存
    每次重新打包的会生成一个唯一的hash值
>问题每次重新打包会导致所有缓存失效
>chunkhash 根据chunk 生成hash值，如果打包来源于同一个chunk
>contenthash 根据文件的内容生产hash值 不同文件hash值一定不一样
>
>tree shaking 去除无用代码
## 开发环境性能优化
* 优化打包构建速度
* 优化代码调试

## 生产环境性能优化
* 优化打包构建速度