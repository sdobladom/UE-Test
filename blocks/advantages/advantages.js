import { ol, li, h1, button } from "../../scripts/dom-helpers.js"
export default function decorate(block) {

  let container = block.querySelector('p')

  const data = container.textContent.split(/(?<!\s),(?!\s)/)

  container = container.parentElement
  container.innerHTML = ''
  container.append(h1("Why choose this program?"))
  container.append(ol(
    ...data.map((el) => li(el))
  ))
  container.append(button("Download your brochure today"))
}