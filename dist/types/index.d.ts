import { unified } from 'unified';
import { VNodeStyle, VNode, VNodeData, On, init } from 'snabbdom';
interface Opt {
    className?: string;
    attrs?: Record<string, string>;
    style?: VNodeStyle;
    on?: On;
    codeTheme?: "light" | "dark";
}
declare class Render {
    container: HTMLElement;
    opt?: Opt | undefined;
    patch: ReturnType<typeof init>;
    oldVnode: VNode;
    constructor(container: HTMLElement, opt?: Opt | undefined);
    render(markdown: string): void;
    mast(markdown: string): import('mdast').Root;
    hast(mast: ReturnType<typeof unified.prototype.parse>): Promise<import('hast').Root>;
    vnode(node: Awaited<ReturnType<typeof unified.prototype.run>>, top?: boolean): any;
    highlight(): void;
    html(vnode: VNode): void;
    get dom(): HTMLDivElement;
    get props(): VNodeData;
}
export default Render;
