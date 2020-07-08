### js在HTML中的引入方式
1.嵌入式
> HTML为我们提供了`<script>`标签用来嵌入js 代码。
>
> `<script>`有6个属性`async`、`charset`、`defer`、`language`、`src`、`type`
> 其中 `type`、`src`是比较常用的两个属性
>
> 我们在是使用嵌入式这种方式写入JavaScript代码的时候只需为`<script>`指定`type`属性为 "text/javascript" 。这个属性的默认值也为"text/javascript"，所以这个属性不是必须的。
>

```html
<script type="text/javascript">
    // 书写javascript代码...
</script>
```
2.引用外部文件
> 上面我们提到了`src` 属性，这个属性的值是一个指向外部JavaScript文件的链接。例如：

```html
<script type="text/javascript" src="example.js"></script>
```

#### 知识点
1. 使用嵌入式方式的时候，JavaScript代码中不能出现’</script>'这个字符串。否则，浏览器将无法正常解析JavaScript代码。如果实在要输出字符串可以使用'\'来转义一下。
2. 带有`src` 属性的`<script>`元素不应该在其`<script>`和`</script>`标签之间在包含额外的JavaScript代码。如果包含了嵌入的代码，则只会下载并执行外部脚本文件，嵌入的代码会被忽略。
3. 只要不存在`defer`和`async`属性，浏览器会按照JavaScript代码出现的先后顺序依次解析。
4. 推荐将JavaScript代码放在`<body>`标签中的主要内容之后并在`</body>`标签前面。