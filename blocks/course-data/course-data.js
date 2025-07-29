import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
  const tags = block.querySelectorAll('[data-aue-resource]');
  const elements = Array.from(tags).map(el => el.getAttribute('data-aue-resource'));
  const data = elements[0].split("aemconnection:/")
  const url = "https://author-p147864-e1510969.adobeaemcloud.com/" + data[0] + ".json"
  console.log(url)
  const content = await ffetch(url).all();
  console.log(content)
}
