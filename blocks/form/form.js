import { form, script } from '../../scripts/dom-helpers.js';

export default function decorate(block) {

  const container = document.querySelectorAll('.form div > div')[0];
  const code = +container.children[0].textContent

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