export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  acitiveTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((intemMenu, index) => {
      intemMenu.addEventListener('click', () => this.acitiveTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.acitiveTab(0);
      this.addTabNavEvent();
    }
  }
}
