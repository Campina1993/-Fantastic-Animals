export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const AtivarClasse = 'ativo';

  function activeAccordion() {
    this.classList.toggle(AtivarClasse);
    this.nextElementSibling.classList.toggle(AtivarClasse);
  }
  if (accordionList.length) accordionList[0].classList.add(AtivarClasse);
  accordionList[0].nextElementSibling.classList.add(AtivarClasse);

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
