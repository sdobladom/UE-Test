import { loadBlock } from '../../scripts/aem.js';


export default function decorate(block) {
  const ps = block.querySelectorAll('p')
  for (const el of ps) {
    if (!Number.isNaN(+el.textContent)) {
      const parent = el.parentElement
      parent.classList.add('block', 'form');
      parent.dataset.blockName = 'form';
      parent.textContent = el.textContent
      el.remove()
      loadBlock(parent)
      break
    }
  }
}
