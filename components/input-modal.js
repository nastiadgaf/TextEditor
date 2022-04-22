class InputModal extends Dropdown {
	#login = 'admin';
	#password = 'password';

	constructor(listId) {
		super(listId);
		//this.createVariablesList();
		this.loginInput = document.querySelector('[data-input="login"]')
		this.passwordInput = document.querySelector('[data-input="password"]')
		this.signInButton = document.querySelector('[data-input="button"]')
		this.inputBlock = document.querySelector('.inputs');
		this.switchPanelBtn = document.querySelector('#switch-panel');
		//this.switchPanelBtn.disabled = true;

		this.cancel = document.querySelector('[data-click="cancel"]')
		this.confirm = document.querySelector('[data-click="confirm"]')
		this.signOut = document.querySelector('[data-modal="sign-out"]')
		this.signIn = document.querySelector('[data-modal="sign-in"]')

		this.validationMessage = new Message(document.querySelector('.sign-in__inputs'))
		this.isMessage = false;
		
	}

	validate = () => {
		this.signInButton.addEventListener('click', () => {
			this.validateSignInInputs();
		})
	}
	// createVariablesList = () => {
	// 	this.variablesList = {
	// 		loginInput: '[data-input="login"]',
	// 		passwordInput: '[data-input="password"]',
	// 		signInButton: '[data-input="button"]',
	// 		inputBlock: '.inputs',
	// 		switchPanelBtn: '#switch-panel',
	// 		signOut: '[data-modal="sign-out"]',
	// 		signIn: '[data-modal="sign-in"]',
	// 		cancel: '[data-click="cancel"]',
	// 		confirm: '[data-click="confirm"]'
	// 	}
		
	// 	const {variablesList} = this;

	// 	for(let key in variablesList){
	// 		this.key = document.querySelector(variablesList[key]);
	// 		console.log(this.key);
	// 	}
	// }

	get formStatus () {
		let status = null;

		if(this.loginInput.value !== this.#login || this.passwordInput.value !== this.#password) status = 'incorrect';
		if(this.loginInput.value === '' || this.passwordInput.value === '') status = 'empty';
		
		if(this.loginInput.value === this.#login && this.passwordInput.value === this.#password) status = 'correct';

		return status;
	}

	addInvalidClassToInputs = () => {
		this.loginInput.classList.add('invalid');
		this.passwordInput.classList.add('invalid');
	}

	removeInvalidClassToInputs = () => {
		this.loginInput.classList.remove('invalid')
		this.passwordInput.classList.remove('invalid')
	}

	validateSignInInputs = () => {
		const { formStatus, validationMessage } = this;

		switch(formStatus) {
			case 'empty':
				this.addInvalidClassToInputs();
				validationMessage.add('Value is empty')
				break;
			case 'incorrect':
				this.addInvalidClassToInputs();
				validationMessage.add('Value is incorrect')
				break;
			case 'correct':
				this.loginInput.value = ''
				this.passwordInput.value = ''
				this.closeModal('sign-in')
				this.signOut.classList.remove('hidden')
				this.signIn.classList.add('hidden')
				this.removeInvalidClassToInputs();
				//this.switchPanelBtn.disabled = false;
				closeInput.logOut();
				break;
		}

	}

	logOut = () => {
		
		this.signOut.addEventListener('click', () => {
			this.toggleModal('sign-out')
		})
		this.cancel.addEventListener('click', () => {
			this.closeModal('sign-out')
		})
		this.confirm.addEventListener('click', () => {
			this.closeModal('sign-out')
			this.signOut.classList.add('hidden')
			this.signIn.classList.remove('hidden')
			//this.switchPanelBtn.disabled = true;
		})
	}
}

class Message {
    constructor(parent) {
        this.elem = null;
        this.parent = parent;
    }

    add(messageText) {
        
        if(!this.elem) this.create();
        this.elem.textContent = messageText;
    }

    create() {
		const { parent } = this;
        const elem = document.createElement('p');
        elem.classList.add('error');
        parent.append(elem);
        this.elem = elem;
    }

    remove() {
        this.elem.remove();
        this.elem = null;
    }
}

const input = new InputModal('sign-in');
input.validate();
const closeInput = new InputModal('sign-out')
closeInput.logOut();