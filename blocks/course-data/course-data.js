import ffetch from '../../scripts/ffetch.js';

export default function decorate(block) {
//  const content = await ffetch('/course-data.json').all();
  const elements = block.querySelectorAll('[data-aue-resource]');
  console.log(block.innerHTML)
  console.log(elements.length)
  Array.from(elements).map(el => console.log(el.getAttribute('data-aue-resource')));
}
