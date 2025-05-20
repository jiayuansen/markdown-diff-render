import { unified } from 'unified';
import parse from 'remark-parse';
import rehype from 'remark-rehype';
import gfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import highlight from 'rehype-highlight';
import { h } from 'snabbdom';
import type { VNodeStyle, VNode, VNodeData, On } from 'snabbdom';
import { init } from 'snabbdom';
import {
  classModule, propsModule,
  styleModule, attributesModule,
  eventListenersModule,
} from 'snabbdom';

interface Opt {
  className?: string;
  attrs?: Record<string, string>;
  style?: VNodeStyle;
  on?: On
  codeTheme?: "light" | "dark"; // light is default
}

class Render {
  patch: ReturnType<typeof init>
  oldVnode: VNode;

  constructor(public container: HTMLElement, public opt?: Opt) {
    if (container instanceof HTMLElement === false) {
      throw new Error("Invalid argument: an HTML element is required for rendering.")
    }
    container.replaceChildren()
    this.patch = init([
      classModule, styleModule,
      propsModule, attributesModule,
      eventListenersModule,
    ]);
    const div = document.createElement("div")
    container.append(div)
    this.oldVnode = h("div", this.props)
    this.patch(div, this.oldVnode);
    this.highlight()
  }

  render(markdown: string) {
    if (!markdown || typeof markdown !== "string") {
      throw new Error("Invalid argument: parameter is not a valid markdown text.")
    }
    const mast = this.mast(markdown)
    this.hast(mast).then(hast => {
      const vnode = this.vnode(hast, true)
      this.html(vnode)
      this.oldVnode = vnode
    })
  }

  mast(markdown: string) {
    return unified().use(parse).parse(markdown)
  }

  hast(mast: ReturnType<typeof unified.prototype.parse>) {
    return unified()
      .use(parse)
      .use(frontmatter)
      .use(gfm)
      .use(rehype)
      .use(highlight, { detect: true })
      .run(mast);
  }

  vnode(node: Awaited<ReturnType<typeof unified.prototype.run>>, top = false) {
    if (node.type === 'text') return node.value;

    const tag = node.tagName || 'div';
    const props: Record<string, unknown> = {};

    if (node.properties) {
      for (const [key, value] of Object.entries(node.properties)) {
        props[key] = Array.isArray(value) ? value.join(' ') : value;
      }
    }

    const children = (node.children || []).map(this.vnode.bind(this));

    return top === true
      ? h(tag, { props, ...this.props }, children)
      : h(tag, { props }, children);
  }

  highlight() {
    try {
      this.opt?.codeTheme === "dark"
        ? import("highlight.js/styles/github-dark.css")
        : import("highlight.js/styles/github.css")
    } catch (err) {
      console.warn(err)
    }
  }

  html(vnode: VNode) {
    this.patch(this.oldVnode, vnode)
  }

  get dom() {
    return this.container.firstChild as HTMLDivElement
  }

  get props(): VNodeData {
    const { opt } = this
    const classList = opt?.className ? opt.className.split(" ") : []
    const className: Record<string, boolean> = {}
    const attrs: Record<string, string> = opt?.attrs || {}
    for (const el of classList) {
      Object.assign(className, { [el]: true })
    }
    return { class: className, attrs, style: opt?.style, on: opt?.on }
  }
}

export default Render
