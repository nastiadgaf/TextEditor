class TableModal extends Dropdown {
  constructor(listId) {
    super(listId);
    this.main = this.getElement('#main');
    this.getElement('[data-action="create-table"]').addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        this.createTable();
      }
    );

    this.getElement('[data-action="reset-table"]').addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        this.resetModal(this.getElement('#table-modal'));
      }
    );
  }

  createTableLayout = () => {
    this.newTable = document.createElement('table');

    for (let i = 0; i < this.getElement('#count-tr').value; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < this.getElement('#count-td').value; j++) {
        let cell = document.createElement('td');
        cell.textContent = 'td';
        cell.style.width = `${this.getElement('#width-td').value}px`;
        cell.style.height = `${this.getElement('#height-td').value}px`;
        cell.style.border = `${this.getElement('#border-width').value}px ${
          this.getElement('#select_border').value
        } ${this.getElement('#select_border-color').value}`;
        row.append(cell);
      }
      this.newTable.append(row);
    }
  };

  createTable = () => {
    this.highlightNotFilledInputs('#table-modal');
    if (this.checkFields('#table-modal')) {
      this.createTableLayout();
      this.appendElementToDOM(
        '.table__block-edit',
        this.newTable.innerHTML,
        this.main
      );
      this.appendElementToDOM('.table__block-view', this.newTable, this.main);
      this.closeModal('table-modal');
    }
  };
}

const table = new TableModal('table-modal');
