class ActionPanel {
	constructor(panel, main) {
		this.panel = panel;
		this.main = main;
		this.panel.addEventListener('click', ({target: {dataset: {type,value}}}) => {
			if (this.main.style.getPropertyValue(type) === value) {
				this.removeStyle(type, value);
			} else {
				this.addStyle(type, value);
			}
		})
	}

	addStyle = (type, value) => {
		document.querySelectorAll('.buttons__item').forEach(btn => {
			btn.classList.remove('active');
		})
		document.querySelector(`[data-value="${value}"]`).classList.add('active');
		this.main.style.setProperty(type, value);
	}

	removeStyle = (type, value) => {
		this.main.style.removeProperty(type);
		document.querySelector(`[data-value="${value}"]`).classList.remove('active');
	}
}

const action = new ActionPanel(document.getElementById('header'), document.getElementById('main'));

class Dropdown {
	constructor(listId) {
		this.list = document.getElementById(listId);
		this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
		this.closeModalBtn = document.querySelector(`[data-close="${listId}"]`);
		this.toggleModalBtn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
			this.toggleModal(relatedModal);
		});

		this.closeModalBtn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
			this.closeModal(relatedModal);
		});
	}
	toggleModal = (modalSelector) => {
		let modal = document.getElementById(modalSelector);
		modal.classList.toggle('hidden');
	}

	closeModal = (modalSelector) => {
		let modal = document.getElementById(modalSelector);
		modal.classList.add('hidden');
	}


}
 //const dropdownSelectFont = new Dropdown('select-font');
// const dropdownSelectSize = new Dropdown('select-size');
const dropdownLogIn = new Dropdown('log-in');
const dropdownBgColor = new Dropdown('bg-modal');

const dropdownColor = new Dropdown('color-modal');

// const dropdownInnerBgImgModal = new Dropdown('inner-bg-img-modal');
// const dropdownInnerBgColorModal = new Dropdown('inner-bg-color-modal');

class InputModal extends Dropdown {
	#login = 'admin';
	#password = 'password';

	constructor(listId) {
		super(listId);
		this.loginInput = document.querySelector('[data-input="login"]')
		this.passwordInput = document.querySelector('[data-input="password"]')
		this.signInButton = document.querySelector('[data-input="button"]')
		this.inputBlock = document.querySelector('.inputs');
		this.switchPanelBtn = document.querySelector('#switch-panel');
		this.switchPanelBtn.disabled = true;

		this.signOut = document.querySelector('[data-modal="sign-out"]')
		this.signIn = document.querySelector('[data-modal="sign-in"]')

		this.cancel = document.querySelector('[data-click="cancel"]')
		this.confirm = document.querySelector('[data-click="confirm"]')
		
		this.isMessage = false;
		this.signInButton.addEventListener('click', () => {
			this.validateSignInInputs();
		})
	}

	// addMessage = (text) => {
	// 	if (!this.isMessage) {
	// 		this.message = document.createElement('p');
	// 		this.inputBlock.append(this.message)
	// 		this.message.classList.add('error')
	// 	}
		
	// 	this.message.textContent = text;
	// }


	addInvalidClassToInputs = () => {
		this.loginInput.classList.add('invalid');
		this.passwordInput.classList.add('invalid');
	}

	removeInvalidClassToInputs = () => {
		this.loginInput.classList.remove('invalid')
		this.passwordInput.classList.remove('invalid')
	}

	validateSignInInputs = () => {
		if (this.loginInput.value === '' || this.passwordInput.value === '') {
			this.addInvalidClassToInputs();
			//this.addMessage('Value is empty')
			//this.messageIncorrect.remove()
		} else if (this.loginInput.value !== this.#login || this.passwordInput.value !== this.#password) {
			this.addInvalidClassToInputs();
			//this.addMessage('Check your login or password')
			//this.messageEmpty.remove();
		} else {
			this.loginInput.value = ''
			this.passwordInput.value = ''
			//this.messageEmpty.remove();
			//this.messageIncorrect.remove();
			this.closeModal('sign-in')
			this.signOut.classList.remove('hidden')
			this.signIn.classList.add('hidden')
			this.removeInvalidClassToInputs();
			this.switchPanelBtn.disabled = false;
			
		}

	}

	logOut = () => {
		const cancel = document.querySelector('[data-click="cancel"]')
		const confirm = document.querySelector('[data-click="confirm"]')
		this.signOut.addEventListener('click', () => {
			this.toggleModal('sign-out-modal')
		})
		cancel.addEventListener('click', () => {
			this.closeModal('sign-out-modal')
		})
		confirm.addEventListener('click', () => {
			this.closeModal('sign-out-modal')
			this.signOut.classList.add('hidden')
			this.signIn.classList.remove('hidden')
			this.switchPanelBtn.disabled = true;
		})
	}
}

const input = new InputModal('sign-in');
const closeInput = new InputModal('sign-out')

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

class List extends Dropdown {
	constructor(listId) {
		super(listId);
		this.olLiCount = document.querySelector('#ol-li-item');
		this.olStyleType = document.querySelector('#ol-select');
		this.main = document.querySelector('#main');
		this.createOlBtn = document.querySelector('[data-action="create-ol-list"]');
		this.createUlBtn = document.querySelector('[data-action="create-ul-list"]');
		this.ulLiCount = document.querySelector('#ul-li-item');
		this.ulStyleType = document.querySelector('#ul-select');
		this.createOlBtn.addEventListener('click', (e) => {
			e.preventDefault();
			this.createList('ol', this.olStyleType.value, this.olLiCount.value);
			console.log(1)
		})
		this.createUlBtn.addEventListener('click', (e) => {
			e.preventDefault();
			this.createList('ul', this.ulStyleType.value, this.ulLiCount.value);
			console.log(2)
		})
	}

	createList = (elem, styleType, count) => {
		const newList = document.createElement(elem);
		const liType = styleType;
		for (let i = 1; i <= count; i++) {
			const newLi = document.createElement('li');
			newLi.textContent = `item ${i}`;
			newLi.style.setProperty('list-style-type', liType)
			newList.append(newLi);
		}
		this.main.append(newList);
	}
}

const ol = new List('ol-modal');
const ul = new List('ul-modal');