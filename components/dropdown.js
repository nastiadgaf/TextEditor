class Dropdown {
  constructor(listId) {
    this.list = document.getElementById(listId);
    this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
    this.closeModalBtn = document.querySelectorAll(`[data-close="${listId}"]`);
    this.toggleModalBtn.addEventListener(
      'click',
      ({
        target: {
          dataset: { relatedModal },
        },
      }) => {
        this.toggleModal(relatedModal);
      }
    );

    this.closeModalBtn.forEach((btn) => {
      btn.addEventListener(
        'click',
        ({
          target: {
            dataset: { relatedModal },
          },
        }) => {
          this.closeModal(relatedModal);
        }
      );
    });
  }
  toggleModal = (modalSelector) => {
    const modals = document.querySelectorAll('[data-modal-panel="main"]');
    modals.forEach((item) => {
      item.classList.add('hidden');
    });
    let modal = document.getElementById(modalSelector);
    modal.classList.toggle('hidden');
  };

  closeModal = (modalSelector) => {
    let modal = document.getElementById(modalSelector);
    modal.classList.add('hidden');
  };

  checkFields = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    let checking = true;

    for (const input of modal.querySelectorAll('.input')) {
      if (input.value !== '' && input.value !== 'choose') continue;
      checking = false;
    }
    return checking;
  };

  highlightNotFilledInputs = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.querySelectorAll('.input').forEach((input) => {
      if (input.value === '' || input.value === 'choose') {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });
  };

  resetModal = (modal) => {
    this.modal = modal;
    this.clearInputs('input', '', this.modal);
    this.clearInputs('select', 'choose', this.modal);
  };

  clearInputs = (inputName, inputValue, modal) => {
    modal.querySelectorAll(inputName).forEach((item) => {
      item.classList.remove('invalid');
      item.value = inputValue;
    });
  };

  getElement = (element) => {
    return document.querySelector(element);
  };

  appendElementToDOM = (elementSelector, element, block) => {
    block.querySelector(elementSelector).append(element);
  };
}
const dropdownSelectFont = new Dropdown('select-font');
const dropdownSelectSize = new Dropdown('select-size');

const dropdownBgColor = new Dropdown('bg-modal');
const dropdownColor = new Dropdown('color-modal');
