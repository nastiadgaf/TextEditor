const text = document.querySelectorAll('.text')
class ActionPanel {
    reduce(type, value) {
        text.forEach(item => {
            item.style.setProperty(type, value);
        })
    }
}

const action = new ActionPanel();
document.addEventListener('click', (e) => {
    const actionType = e.target.dataset.type;
    const actionValue = e.target.dataset.value;
    action.reduce(actionType, actionValue)
    
})

class Dropdown {
    showModal(modalSelector) {
        let modal = document.getElementById(modalSelector);
        modal.classList.toggle('hidden');
    }

    closeModal(modalSelector) {
        let modal = document.getElementById(modalSelector);
        modal.classList.add('hidden');
    }

}

const dropdown = new Dropdown;

document.addEventListener('click', (e) => {
    if(e.target.dataset.modal){
        dropdown.showModal(e.target.dataset.modal)
    } else if(e.target.dataset.close){
         dropdown.closeModal(e.target.dataset.close)
    }
   
})

class InputModal extends Dropdown{
    constructor(){
        super();
        this.login = 'admin';
        this.password = 'password';

        this.loginInput = document.querySelector('[data-input="login"]')
        this.passwordInput = document.querySelector('[data-input="password"]')
        this.signInButton = document.querySelector('[data-input="button"]')
        this.inputBlock = document.querySelector('.inputs');

        this.signOut = document.querySelector('[data-modal="sign-out"]')
        this.signIn = document.querySelector('[data-modal="sign-modal"]')
    }
       
    createMessage = (message, text) => {
        message = document.createElement('p');
        message.textContent = text;
        message.classList.add('error')
        this.inputBlock.append(message)
    }


    addInvalidClassToInputs(){
        this.loginInput.classList.add('invalid');
        this.passwordInput.classList.add('invalid');
    }

    removeInvalidClassToInputs(){
        this.loginInput.classList.remove('invalid')
        this.passwordInput.classList.remove('invalid')
    }

    validateSingInInputs() {
        
        this.signInButton.addEventListener('click', () => {
            if (this.loginInput.value === '' || this.passwordInput.value === '') {
                this.addInvalidClassToInputs();
                this.createMessage(this.messageEmpty, 'Value is empty')
                this.messageIncorrect.remove()
            } else if (this.loginInput.value !== this.login || this.passwordInput.value !== this.password) {
                this.addInvalidClassToInputs();
                this.createMessage(this.messageIncorrect, 'Check your login or password')
                this.messageEmpty.remove();
            } else {
                this.loginInput.value = ''
                this.passwordInput.value = ''
                //this.messageEmpty.remove();
                //this.messageIncorrect.remove();
                this.closeModal('sign-modal')
                this.signOut.classList.remove('hidden')
                this.signIn.classList.add('hidden')
                this.removeInvalidClassToInputs();
            }
        })

    }

    logOut() {
        const cancel = document.querySelector('[data-click="cancel"]')
        const confirm = document.querySelector('[data-click="confirm"]')
        this.signOut.addEventListener('click', () => {
            this.showModal('sign-out-modal')
        })
        cancel.addEventListener('click', () => {
            this.closeModal('sign-out-modal')
        })
        confirm.addEventListener('click', () => {
            this.closeModal('sign-out-modal')
            this.signOut.classList.add('hidden')
            this.signIn.classList.remove('hidden')
        })
    }
}

const input = new InputModal();
input.validateSingInInputs();
input.logOut();