import { loadBlock } from '../../scripts/aem.js';


export default function decorate(block) {
  console.log(block.querySelectorAll('p').length)
  block.querySelectorAll('p').forEach((el) => {
    if (!Number.isNaN(+el.textContent)) {
      el.classList.add('block', 'form');
      el.dataset.blockName = 'form';
      loadBlock(el)
    }
  });
}
