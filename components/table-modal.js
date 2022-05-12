class TableModal extends Dropdown {
  constructor(listId) {
    super(listId);
    this.main = document.querySelector('#main');
    this.createTableBtn = document.querySelector(
      '[data-action="create-table"]'
    );
    this.resetTableBtn = document.querySelector('[data-action="reset-table"]');
    this.countTr = document.querySelector('#count-tr');
    this.countTd = document.querySelector('#count-td');
    this.widthTd = document.querySelector('#width-td');
    this.heightTd = document.querySelector('#height-td');
    this.borderWidth = document.querySelector('#border-width');
    this.borderStyle = document.querySelector('#select_border');
    this.borderColor = document.querySelector('#select_border-color');
    this.createTableBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.createTable();
    });

    this.resetTableBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.resetTable();
    });
  }

  resetTable = () => {
    this.tableModal = document.querySelector('#table-modal');
    this.tableModal.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
    this.tableModal.querySelectorAll('select').forEach((select) => {
      select.value = 'choose';
    });
  };

  createTable = () => {
    this.highlightNotFilledInputs('#table-modal');
    if (this.checkFields('#table-modal')) {
      const newTable = document.createElement('table');

      for (let i = 0; i < this.countTr.value; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < this.countTd.value; j++) {
          let cell = document.createElement('td');
          cell.textContent = 'td';
          cell.style.width = `${this.widthTd.value}px`;
          cell.style.height = `${this.heightTd.value}px`;
          cell.style.border = `${this.borderWidth.value}px ${this.borderStyle.value} ${this.borderColor.value}`;
          row.append(cell);
        }
        newTable.append(row);
      }
      main.append(newTable);
      this.closeModal('table-modal');
    }
  };
}

const table = new TableModal('table-modal');
