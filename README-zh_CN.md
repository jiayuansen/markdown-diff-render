# markdown-diff-render

`markdown-diff-render`是一个基于[unified](https://github.com/unifiedjs/unified)、[remark](https://github.com/rehypejs/rehype)和[snabbdom](https://github.com/snabbdom/snabbdom)实现的markdown渲染器，支持[gfm](https://github.github.com/gfm)规范，其目的是实现markdown的增量渲染，避免全量渲染带来的图片资源重复加载以及其他的性能问题，适用于markdown文本拼接渲染的场景。

# Demo

[live demo](https://jiayuansen.github.io/markdown-diff-render)

# 安装

```bash
npm i markdown-diff-render
```

# 使用示例

```javascript
import MDR markdown-diff-render
const container = document.querySelector("#container")
const mdr = new MDR(container, { className: "wrapper"})
const markdown = `
# Level 1 Heading

This is a paragraph

- List item 1
- List item 2
`
mdr.render(mardown)
```

运行结果：

```html
<div id="container">
    <div class="wrapper">
        <h1>Level 1 Heading</h1>
        <p>This is a paragraph</p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
        </ul>
    </div>
</div>
```

# 参数说明

## 构造函数

```javascript
new MDR(container[, { className, attrs, style, on, codeTheme }])
```

| 参数名称  | 类型        | 是否必填 | 说明                                                         |
| --------- | ----------- | -------- | ------------------------------------------------------------ |
| container | HTMLElement | 是       | 用于放置渲染内容                                             |
| className | string      | 否       | 多个class name时应该用空格隔开，例如"classname1 classname2"  |
| attrs     | object      | 否       | HTML元素[Attribute](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) |
| style     | object      | 否       | css属性键值对                                                |
| on        | object      | 否       | 事件监听器                                                   |
| codeTheme | string      | 否       | 代码高亮主题，可选值为light或者dark，默认为light。           |

## 属性

| 属性名称 | 说明                 |
| -------- | -------------------- |
| dom      | markdown的渲染根节点 |

## 方法

| 方法名称         | 参数含义               |
| ---------------- | ---------------------- |
| render(markdown) | 需要渲染的markdown文本 |

# 代码高亮

本项目使用[rehype-highlight](https://github.com/rehypejs/rehype-highlight)插件实现代码高亮功能，并且使用了[highlight.js](https://github.com/highlightjs/highlight.js)的github主题。如果你想更改主题，请重写highlight方法引入新的主题。

```javascript
import _MDR markdown-diff-render
class MDR extends _MDR {
    highlight() {
        // import your code highlight theme here. Here's an example.
        import("highlight.js/styles/github.css")
    }
}
```

本项目支持[highlight.js](https://github.com/highlightjs/highlight.js)提供的[官方主题](https://github.com/highlightjs/highlight.js/tree/main/src/styles)。

# 浏览器支持

由于使用[import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)方法实现动态引入以支持light和dark的代码高亮主题，因此本项目所支持的浏览器版本不低于`Chrome 63`。