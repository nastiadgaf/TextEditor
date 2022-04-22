
class Dropdown {
	constructor(listId) {
		this.list = document.getElementById(listId);
		this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
		this.closeModalBtn = document.querySelectorAll(`[data-close="${listId}"]`);
		this.toggleModalBtn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
			this.toggleModal(relatedModal);
		});

		this.closeModalBtn.forEach(btn => {
			btn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
			this.closeModal(relatedModal);
		});
		})
		
	}
	toggleModal = (modalSelector) => {
		const modals = document.querySelectorAll('[data-modal-panel="main"]');
		modals.forEach(item => {
			item.classList.add('hidden');
		})
		let modal = document.getElementById(modalSelector);
		modal.classList.toggle('hidden');
		
	}

	closeModal = (modalSelector) => {
			let modal = document.getElementById(modalSelector);
			modal.classList.add('hidden');
		
	}	

}
const dropdownSelectFont = new Dropdown('select-font');
const dropdownSelectSize = new Dropdown('select-size');


const dropdownBgColor = new Dropdown('bg-modal');
const dropdownColor = new Dropdown('color-modal');

const dropdownInnerBgImgModal = new Dropdown('inner-bg-img-modal');
const dropdownInnerBgColorModal = new Dropdown('inner-bg-color-modal');


