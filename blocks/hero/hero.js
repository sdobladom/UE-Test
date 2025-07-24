export default function decorate(block) {
  [...block.children].forEach((section) => {
    const onlyChild = section.children.length === 1 ? section.firstElementChild : null;
    if (
      onlyChild &&
      onlyChild.tagName === 'DIV' &&
      (onlyChild.querySelector('picture') || onlyChild.querySelector('h1'))
    ) {
      section.replaceWith(onlyChild);
    }
  });

  const pictures = block.querySelectorAll('picture');
  const heading = block.querySelector('h1');

  if (pictures.length >= 2 && heading) {
    pictures[0].className = 'background'
    const secondPicture = pictures[1];
    secondPicture.className = 'logo'
    const container = secondPicture.closest('div');
    container.appendChild(heading);
    container.className = 'info'
  }

  [...block.children].forEach((section) => {
    if (section.children.length === 0) {
      section.remove();
    }
  });
}
