# markdown-diff-render

English | [简体中文](./README-zh_CN.md)

`markdown-diff-render` is a Markdown renderer based on [unified](https://github.com/unifiedjs/unified), [remark](https://github.com/rehypejs/rehype), and [snabbdom](https://github.com/snabbdom/snabbdom). It supports the [GFM](https://github.github.com/gfm) specification and is designed to enable incremental rendering of Markdown. This avoids issues such as repeated image loading and other performance problems caused by full re-rendering. It is especially suitable for scenarios involving concatenated Markdown content rendering.

# Demo

[live demo](https://jiayuansen.github.io/markdown-diff-render)

## Installation

```bash
npm i markdown-diff-render
```

## Usage

```javascript
import MDR from 'markdown-diff-render'
const container = document.querySelector("#container")
const mdr = new MDR(container, { className: "wrapper" })
const markdown = `
# Level 1 Heading

This is a paragraph

- List item 1
- List item 2
`
mdr.render(markdown)
```

Render output:

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

## Parameters

### Constructor

```javascript
new MDR(container[, { className, attrs, style, on, codeTheme }])
```

| Parameter   | Type        | Required | Description |
|-------------|-------------|----------|-------------|
| container   | HTMLElement | Yes      | A html element where render result inserted into |
| className   | string      | No       | Multiple class names should be separated by spaces, such as "classname1 classname2" |
| attrs       | object      | No       | HTML element [attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute) |
| style       | object      | No       | CSS key-value pairs |
| on          | object      | No       | Event listeners |
| codeTheme   | string      | No       | Code highlight theme, either `light` or `dark`. Default is `light`. |

### Properties

| Property | Description               |
|----------|---------------------------|
| dom      | Root DOM node of the rendered Markdown |

### Methods

| Method            | Description                   |
|-------------------|-------------------------------|
| render(markdown)  | Renders the provided Markdown string |

## Code Highlighting

This project uses the [rehype-highlight](https://github.com/rehypejs/rehype-highlight) plugin to implement code highlighting and adopts the GitHub theme from [highlight.js](https://github.com/highlightjs/highlight.js). If you want to use a different theme, override the `highlight` method and import your desired theme.

```javascript
import _MDR from 'markdown-diff-render'
class MDR extends _MDR {
    highlight() {
        // import your code highlight theme here. Here's an example.
        import("highlight.js/styles/github.css")
    }
}
```

It supports the [official themes](https://github.com/highlightjs/highlight.js/tree/main/src/styles) provided by `highlight.js`.

## Browser Support

Since dynamic imports are used (via [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)) to support switching between light and dark code highlight themes, the minimum supported browser version is `Chrome 63`.
