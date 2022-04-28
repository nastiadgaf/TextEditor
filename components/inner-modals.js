class InnerModals {
  constructor(colorModalAttribute, imgModalAttribute) {
    this.colorModal = document.querySelector(`#${colorModalAttribute}`);
    this.imageModal = document.querySelector(`#${imgModalAttribute}`);

    document
      .querySelector(`[data-modal="${imgModalAttribute}"]`)
      .addEventListener('click', () => {
        this.changePanels(this.colorModal, this.imageModal);
      });

    document
      .querySelector(`[data-modal="${colorModalAttribute}"]`)
      .addEventListener('click', () => {
        this.changePanels(this.imageModal, this.colorModal);
      });
  }

  changePanels = (panel, anotherPanel) => {
    panel.classList.add('hidden');
    anotherPanel.classList.remove('hidden');
  };
}

const innerModal = new InnerModals(
  'inner-bg-color-modal',
  'inner-bg-img-modal'
);
