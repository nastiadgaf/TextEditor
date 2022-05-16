class InnerModals {
  constructor(colorModalAttribute, imgModalAttribute, fileModal) {
    this.colorModal = document.querySelector(`#${colorModalAttribute}`);
    this.imageModal = document.querySelector(`#${imgModalAttribute}`);
    this.fileModal = document.querySelector(`#${fileModal}`);
    this.fileUploader = document.querySelector('#file-uploader');

    this.fileUploader.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', (e) => {
        document.querySelector(
          '#main'
        ).style.background = `url(${e.target.result})`;
      });
    });
    document.querySelector('.modal__list').addEventListener('click', (e) => {
      document.querySelectorAll(`[data-inner-modal]`).forEach((modal) => {
        modal.classList.add('hidden');
      });
      document
        .querySelector(`#${e.target.dataset.modal}`)
        .classList.remove('hidden');
    });
  }
}

const innerModal = new InnerModals(
  'inner-bg-color-modal',
  'inner-bg-img-modal',
  'inner-file-modal'
);
