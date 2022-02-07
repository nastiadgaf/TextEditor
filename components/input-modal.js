
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
		
		//this.isMessage = false;
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