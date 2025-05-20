import React from "react"
import { useEffect, useRef, useState } from "react"
import MDR from "markdown-diff-render"
import logo from "@/assets/github_logo.png"
import invertocat from "@/assets/github_invertocat.png"
import "./index.css";

export default () => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<boolean>(false)

  const isScrollToBottom = () => {
    const app = document.querySelector("#app") as HTMLElement
    const { scrollTop, scrollHeight } = app
    return scrollTop + window.innerHeight + 1 >= scrollHeight
  }

  const scrollToBottom = () => {
    const nodes = ref.current!.querySelectorAll("*")
    const lastChild = nodes[nodes.length - 1]
    lastChild instanceof Element && lastChild.scrollIntoView()
  }

  useEffect(() => {
    let markdown = `
# Level 1 Heading

This is a paragraph

\`\`\`javascript
const mdr = new MDR(container, { className, attrs, style, on, codeTheme })

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
\`\`\`

## example images
![github_invertocat](${invertocat})
![github_logo](${logo})


# diff render
- List item 1
- List item 2
`
    if (ref.current) {
      const mdr = new MDR(ref.current, { className: "wrapper" })
      mdr.render(markdown)
      const app = document.querySelector("#app") as HTMLElement
      let i = 3;
      const interval = setInterval(() => {
        markdown += `- List item ${i}\n`
        mdr.render(markdown)
        i++;
        i === 100 && clearInterval(interval)
        isScrollToBottom() && queueMicrotask(scrollToBottom)
      }, 1000);
      app.onscroll = () => {
        isScrollToBottom() ? setVisible(false) : setVisible(true)
      }
      return () => clearInterval(interval)
    }
  }, [])
  return <>
    <div className="container" ref={ref}>
      hello markdown
    </div>
    {visible && <div className="scroll-to-bottom" onClick={scrollToBottom}>↓</div>}
  </>
}