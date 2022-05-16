class List extends Dropdown {
  constructor(listId) {
    super(listId);
    this.main = document.querySelector('#main');

    this.getElement('#reset-ol-list').addEventListener('click', (e) => {
      e.preventDefault();
      this.resetModal(this.getElement('#ol-modal'));
    });
    this.getElement('#reset-ul-list').addEventListener('click', (e) => {
      e.preventDefault();
      this.resetModal(this.getElement('#ul-modal'));
    });
  }

  createOlList = () => {
    this.getElement('[data-action="create-ol-list"]').addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        this.createList(
          'ol',
          this.getElement('#ol-select').value,
          this.getElement('#ol-li-item').value,
          'ol-modal'
        );
      }
    );
  };

  createUlList = () => {
    this.getElement('[data-action="create-ul-list"]').addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        this.createList(
          'ul',
          this.getElement('#ul-select').value,
          this.getElement('#ul-li-item').value,
          'ul-modal'
        );
      }
    );
  };

  createListLayout = (elem, styleType, count) => {
    this.newList = document.createElement(elem);
    const liType = styleType;
    for (let i = 1; i <= count; i++) {
      const newLi = document.createElement('li');
      newLi.textContent = `item ${i}`;
      newLi.style.setProperty('list-style-type', liType);
      this.newList.append(newLi);
    }
  };

  createList = (elem, styleType, count, modal) => {
    this.highlightNotFilledInputs(`#${modal}`);
    if (this.checkFields(`#${modal}`)) {
      this.createListLayout(elem, styleType, count);
      this.appendElementToDOM(
        '.list__block-edit',
        this.newList.innerHTML,
        this.main
      );
      this.appendElementToDOM('.list__block-view', this.newList, this.main);
      this.closeModal(modal);
    }
  };
}

const numberedList = new List('ol-modal');
numberedList.createOlList();
const markedList = new List('ul-modal');
markedList.createUlList();
