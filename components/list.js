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
			this.createList('ol', this.olStyleType.value, this.olLiCount.value, 'ol-modal');
		})
		this.createUlBtn.addEventListener('click', (e) => {
			e.preventDefault();
			this.createList('ul', this.ulStyleType.value, this.ulLiCount.value, 'ul-modal');
		})
	}

	createList = (elem, styleType, count, modal) => {
		const newList = document.createElement(elem);
		const liType = styleType;
		for (let i = 1; i <= count; i++) {
			const newLi = document.createElement('li');
			newLi.textContent = `item ${i}`;
			newLi.style.setProperty('list-style-type', liType)
			newList.append(newLi);
		}
		this.main.append(newList);
		this.closeModal(modal)
	}
}

const numberedList = new List('ol-modal');
const markedList = new List('ul-modal');