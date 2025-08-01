import ffetch from '../../scripts/ffetch.js';

export default async function decorate(block) {
  const tags = block.querySelectorAll('[data-aue-resource]');
  const elements = Array.from(tags).map(el => el.getAttribute('data-aue-resource'));
  const data = elements[0].split("aemconnection:/")
  const url = "https://author-p147864-e1510969.adobeaemcloud.com/" + data[1] + ".json"
  console.log(url)
  const content = await fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error al obtener: ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Contenido del componente:', data);
    return data;
  })
  .catch((error) => {
    console.error('Error en fetch:', error);
    return null;
  });
}
