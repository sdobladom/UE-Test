import { form, script } from '../../scripts/dom-helpers.js';

export default function decorate(block) {

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