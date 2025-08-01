import { form, script } from '../../scripts/dom-helpers.js';

export default function decorate(block) {
//  const tags = block.querySelectorAll('[data-aue-resource]');
//  const elements = Array.from(tags).map(el => el.getAttribute('data-aue-resource'));
//  const data = elements[0].split("aemconnection:/")
//  const url = "https://author-p147864-e1510969.adobeaemcloud.com/" + data[1] + ".json"
//  console.log(url)
//  const content = fetch(url)
//  .then((response) => {
//    if (!response.ok) {
//      throw new Error(`Error al obtener: ${response.statusText}`);
//    }
//    return response.json();
//  })
//  .then((data) => {
//    console.log('Contenido del componente:', data);
//    return data;
//  })
//  .catch((error) => {
//    console.error('Error en fetch:', error);
//    return null;
//  });

  const paragraphs = document.querySelectorAll('p');
  const codeP = paragraphs[paragraphs.length -1]
  const code = +codeP.textContent

   console.log(code)

  const container = codeP.parentElement;
  container.innerHTML = ''

  container.append(
    form({ id: `mktoForm_${code}` })
  )

  container.append(
    script({ src: '//402-ALY-118.mktoweb.com/js/forms2/js/forms2.min.js', onload: () => {
      MktoForms2.loadForm("//402-ALY-118.mktoweb.com", "402-ALY-118", code);
    }})
  )
}