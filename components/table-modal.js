class TableModal extends Dropdown {
	constructor(listId) {
		super(listId);
		this.main = document.querySelector('#main');
		this.createTableBtn = document.querySelector('[data-action="create-table"]');
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
		})
	}

	createTable = () => {
		const newTable = document.createElement('table');

		for (let i = 0; i < this.countTr.value; i++) {
			let tr = document.createElement('tr');
			for (let j = 0; j < this.countTd.value; j++) {
				let td = document.createElement('td');
				td.textContent = 'td'
				td.style.width = `${this.widthTd.value}px`;
				td.style.height = `${this.heightTd.value}px`;
				td.style.border = `${this.borderWidth.value}px ${this.borderStyle.value} ${this.borderColor.value}`;
				tr.append(td)
			}
			newTable.append(tr);
		}
		main.append(newTable);
	}

}

const table = new TableModal('table-modal');