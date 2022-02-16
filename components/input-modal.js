

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
		//this.switchPanelBtn.disabled = true;

		this.signOut = document.querySelector('[data-modal="sign-out"]')
		this.signIn = document.querySelector('[data-modal="sign-in"]')

		this.cancel = document.querySelector('[data-click="cancel"]')
		this.confirm = document.querySelector('[data-click="confirm"]')
		
		this.validationMessage = new Message({parent: this.inputBlock})
		this.isMessage = false;
		this.signInButton.addEventListener('click', () => {
			this.validateSignInInputs();
		})
	}

	get formStatus () {
		let status = null;

		if(this.loginInput.value === '' || this.passwordInput.value === '') status = 'empty';
		if(this.loginInput.value !== this.#login || this.passwordInput.value !== this.#password) status = 'incorrect';
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
				//this.messageEmpty.remove();
				//this.messageIncorrect.remove();
				this.closeModal('sign-in')
				this.signOut.classList.remove('hidden')
				this.signIn.classList.add('hidden')
				this.removeInvalidClassToInputs();
				//this.switchPanelBtn.disabled = false;
				break;
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
			//this.switchPanelBtn.disabled = true;
		})
	}
}

class Message {
    constructor({parent}) {
        this.elem = null;
        this.parent = parent;
    }

    add(messageText) {
        const { elem } = this;
        if(!elem) this.create();
        elem.textContent = messageText;
    }

    create() {
        const elem = document.createElement('p');
        elem.classList.add('error');
        this.parent.append(this.elem);
        this.elem = elem;
    }

    remove() {
        this.elem.remove();
        this.elem = null;
    }
}

const input = new InputModal('sign-in');
const closeInput = new InputModal('sign-out')