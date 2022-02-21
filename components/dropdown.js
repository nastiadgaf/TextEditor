class Dropdown {
	constructor(listId) {
		this.list = document.getElementById(listId);
		this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
		this.closeModalBtn = document.querySelector(`[data-close="${listId}"]`);
		// this.toggleModalBtn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
		// 	this.toggleModal(relatedModal);
		// });

		// this.closeModalBtn.addEventListener('click', ({target: {dataset: {relatedModal}}}) => {
		// 	this.closeModal(relatedModal);
		// });
	}
	toggleModal = (modalSelector) => {
			let modal = document.getElementById(modalSelector);
			modal.classList.toggle('hidden');
		
	}

	closeModal = (modalSelector) => {
			let modal = document.getElementById(modalSelector);
			modal.classList.add('hidden');
		
	}

	changePanel = () => {
		this.toggleModalBtn.addEventListener('click', () => {
			document.querySelector('#log-out').classList.toggle('hidden');
			document.querySelector('#log-in').classList.toggle('hidden');
		})
	}

}



// const dropdownSelectFont = new Dropdown('select-font');
// const dropdownSelectSize = new Dropdown('select-size');
const dropdownLogIn = new Dropdown('log-in');
dropdownLogIn.changePanel();

const dropdownLogOut = new Dropdown('log-out');
dropdownLogOut.changePanel();

const dropdownBgColor = new Dropdown('bg-modal');
dropdownBgColor.toggleModal();
dropdownBgColor.closeModal();

const dropdownColor = new Dropdown('color-modal');

const dropdownInnerBgImgModal = new Dropdown('inner-bg-img-modal');


const dropdownInnerBgColorModal = new Dropdown('inner-bg-color-modal');