import ffetch from '../../scripts/ffetch.js';

export default function decorate(block) {
  const elements = block.querySelectorAll('[data-aue-resource]');
  const url = "https://author-p147864-e1510969.adobeaemcloud.com/" + elements[0].split("aemconnection:/")[0] + ".json"
  const content = await ffetch().all(url);
  console.log(content)
}
