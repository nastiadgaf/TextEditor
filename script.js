const body = document.body
const buttons = document.querySelectorAll('[data-click="change-text-style"]');
const fontButtons = document.querySelectorAll('[data-click="change-font-style]');
const text = document.querySelectorAll('.text')
const selectFont = document.querySelector('.select_font')
const selectSize = document.querySelector('.select_size')
const selectColor = document.querySelector('.select_color')
const editButton = document.querySelector('[data-click="edit"]');

editButton.disabled = true;
class TextEditor {
    constructor() {
        document.addEventListener('click', (e) => this.clickOnFontSizeButtons(e))
        document.addEventListener('click', (e) => this.clickOnFontColorButtons(e))
        document.addEventListener('click', (e) => this.clickOnFontFamilyButtons(e))
        document.addEventListener('click', (e) => this.clickOnStyleButtons(e))
        document.addEventListener('click', (e) => this.clickOnBackgroundButtons(e))
        document.addEventListener('click', (e) => this.clickOnBackgroundImageButtons(e))
        this.validateSingInInputs();
    }

    clickOnFontFamilyButtons(e) {
        const actionTypes = ['arial', 'georgia', 'impact', 'tahoma', 'times', 'verdana', ]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const changeFontFamily = (font) => {
            text.forEach(item => {
                item.style.fontFamily = font;
            })
        }

        switch (currentType) {
            case 'arial':
                changeFontFamily('Arial')
                this.closeList(selectFont)
                break;
            case 'georgia':
                changeFontFamily('Georgia')
                this.closeList(selectFont)
                break;
            case 'impact':
                changeFontFamily('Impact')
                this.closeList(selectFont)
                break;
            case 'tahoma':
                changeFontFamily('Tahoma')
                this.closeList(selectFont)
                break;
            case 'times':
                changeFontFamily('Times New Roman')
                this.closeList(selectFont)
                break;
            case 'verdana':
                changeFontFamily('Verdana')
                this.closeList(selectFont)
                break;
        }
    }

    clickOnFontColorButtons(e) {
        const actionTypes = ['light-turquoise', 'dark-turquoise', 'light-green', 'dark-green', 'light-blue', 'blue', 'light-purple', 'dark-purple',
            'dark-blue', 'navy-blue', 'yellow', 'light-orange', 'orange', 'dark-orange', 'light-red', 'red',
            'white', 'light-grey', 'grey', 'dark-grey', 'black',
        ]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const changeFontColor = (fontcolor) => {
            text.forEach(item => {
                item.style.color = fontcolor;
            })
        }

        switch (currentType) {
            case 'light-turquoise':
                changeFontColor('#0ba99a')
                break;
            case 'dark-turquoise':
                changeFontColor('#089082')
                break;
            case 'light-green':
                changeFontColor('#1fb56b')
                break;
            case 'dark-green':
                changeFontColor('#1b9b5e')
                break;
            case 'light-blue':
                changeFontColor('#2791dd')
                break;
            case 'blue':
                changeFontColor('#207ab9')
                break;
            case 'light-purple':
                changeFontColor('#9b64b5')
                break;
            case 'dark-purple':
                changeFontColor('#9051ac')
                break;
            case 'dark-blue':
                changeFontColor('#32485f')
                break;
            case 'navy-blue':
                changeFontColor('#283d50')
                break;
            case 'yellow':
                changeFontColor('#f5bd06')
                break;
            case 'light-orange':
                changeFontColor('#f79b0a')
                break;
            case 'orange':
                changeFontColor('#ed821a')
                break;
            case 'dark-orange':
                changeFontColor('#db5b00')
                break;
            case 'light-red':
                changeFontColor('#f35a3a')
                break;
            case 'red':
                changeFontColor('#c84626')
                break;
            case 'white':
                changeFontColor('#eaeef1')
                break;
            case 'light-grey':
                changeFontColor('#bcc1c5')
                break;
            case 'grey':
                changeFontColor('#90a2a4')
                break;
            case 'dark-grey':
                changeFontColor('#7c8a8b')
                break;
            case 'black':
                changeFontColor('#000000')
                break;
        }

    }

    clickOnBackgroundButtons(e) {
        const actionTypes = ['light-turquoise-bg', 'dark-turquoise-bg', 'light-green-bg', 'dark-green-bg', 'light-blue-bg', 'blue-bg', 'light-purple-bg', 'dark-purple-bg',
            'dark-blue-bg', 'navy-blue-bg', 'yellow-bg', 'light-orange-bg', 'orange-bg', 'dark-orange-bg', 'light-red-bg', 'red-bg',
            'white-bg', 'light-grey-bg', 'grey-bg', 'dark-grey-bg', 'black-bg'
        ]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const changeBgColor = (bgcolor) => {
            body.style.backgroundImage = '';
            body.style.backgroundColor = bgcolor;
        }

        switch (currentType) {
            case 'light-turquoise-bg':
                changeBgColor('#0ba99a')
                break;
            case 'dark-turquoise-bg':
                changeBgColor('#089082')
                break;
            case 'light-green-bg':
                changeBgColor('#1fb56b')
                break;
            case 'dark-green-bg':
                changeBgColor('#1b9b5e')
                break;
            case 'light-blue-bg':
                changeBgColor('#2791dd')
                break;
            case 'blue-bg':
                changeBgColor('#207ab9')
                break;
            case 'light-purple-bg':
                changeBgColor('#9b64b5')
                break;
            case 'dark-purple-bg':
                changeBgColor('#9051ac')
                break;
            case 'dark-blue-bg':
                changeBgColor('#32485f')
                break;
            case 'navy-blue-bg':
                changeBgColor('#283d50')
                break;
            case 'yellow-bg':
                changeBgColor('#f5bd06')
                break;
            case 'light-orange-bg':
                changeBgColor('#f79b0a')
                break;
            case 'orange-bg':
                changeBgColor('#ed821a')
                break;
            case 'dark-orange-bg':
                changeBgColor('#db5b00')
                break;
            case 'light-red-bg':
                changeBgColor('#f35a3a')
                break;
            case 'red-bg':
                changeBgColor('#c84626')
                break;
            case 'white-bg':
                changeBgColor('#eaeef1')
                break;
            case 'light-grey-bg':
                changeBgColor('#bcc1c5')
                break;
            case 'grey':
                changeBgColor('#90a2a4')
                break;
            case 'dark-grey-bg':
                changeBgColor('#7c8a8b')
                break;
            case 'black-bg':
                changeBgColor('#000000')
                break;
        }

    }

    clickOnBackgroundImageButtons(e) {
        const actionTypes = ['bridge', 'field', 'forest', 'lake', 'mountains', 'rock', 'sun', 'tree', 'waterfall']

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const changeBgImage = (image) => {
            body.style.backgroundImage = image;
        }

        switch (currentType) {
            case 'bridge':
                changeBgImage('url(images/bridge.jpg)')
                break;
            case 'field':
                changeBgImage('url(images/field.jpg)')
                break;
            case 'forest':
                changeBgImage('url(images/forest.jpg)')
                break;
            case 'lake':
                changeBgImage('url(images/lake.jpg)')
                break;
            case 'mountains':
                changeBgImage('url(images/mountains.jpg)')
                break;
            case 'rock':
                changeBgImage('(images/rock.jpg)')
                break;
            case 'sun':
                changeBgImage('url(images/sun.jpg)')
                break;
            case 'tree':
                changeBgImage('url(images/tree.jpg)')
                break;
            case 'waterfall':
                changeBgImage('url(images/waterfall.jpg)')
                break;
        }

    }

    clickOnFontSizeButtons(e) {
        const actionTypes = ['twelve', 'fourteen', 'sixteen', 'eighteen', 'twenty', 'twenty-two', 'twenty-five', 'thirty',]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const addFontSize = (size) => {
            text.forEach(item => {
                item.style.fontSize = size;
            })
        }

        switch (currentType) {
            case 'twelve':
                addFontSize('12px')
                closeList(selectSize)
                break;
            case 'fourteen':
                addFontSize('14px')
                closeList(selectSize)
                break;
            case 'sixteen':
                addFontSize('16px')
                closeList(selectSize)
                break;
            case 'eighteen':
                addFontSize('18px')
                closeList(selectSize)
                break;
            case 'twenty':
                addFontSize('20px')
                closeList(selectSize)
                break;
            case 'twenty-two':
                addFontSize('22px')
                closeList(selectSize)
                break;
            case 'twenty-five':
                addFontSize('25px')
                closeList(selectSize)
                break;
            case 'thirty':
                addFontSize('30px')
                closeList(selectSize)
                break;
        }
    }

    clickOnStyleButtons(e) {
        const actionTypes = ['bold', 'italic', 'under', 'through', 'left', 'center', 'right', 'font', 'size', 'color', 'close', 'bg-color',
            'bg-colors', 'bg-images', 'bg-files', 'sign-in'
        ]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const toggleTextClass = (className) => {
            text.forEach(item => {
                item.classList.toggle(className);
            })
        }

        const removeAlignClasses = () => {
            text.forEach(item => {
                item.classList.remove('right', 'left', 'center');
            })
        }

        const changeActiveClass = () => {
            buttons.forEach(button => {
                button.classList.remove('active');
            })
            e.target.classList.add('active');
        }

        const toggleList = (list, closeList) => {
            closeList.classList.add('hidden');
            list.classList.toggle('hidden')
        }



        switch (currentType) {
            case 'bold':
                toggleTextClass('bold');
                changeActiveClass();
                break;
            case 'italic':
                toggleTextClass('italic');
                changeActiveClass();
                break;
            case 'under':
                toggleTextClass('under');
                changeActiveClass();
                break;
            case 'through':
                toggleTextClass('through');
                changeActiveClass();
                break;
            case 'left':
                removeAlignClasses();
                toggleTextClass('left');
                changeActiveClass();
                break;
            case 'center':
                removeAlignClasses();
                toggleTextClass('center');
                changeActiveClass();
                break;
            case 'right':
                removeAlignClasses();
                toggleTextClass('right');
                changeActiveClass();
                break;
            case 'font':
                toggleList(selectFont, selectSize);
                break;
            case 'size':
                toggleList(selectSize, selectFont);
                break;
            case 'color':
                this.showModal('#color-modal');
                break;
            case 'close':
                this.closeModal('#color-modal');
                this.closeModal('#bg-modal');
                this.closeModal('#sign-modal');
                break;
            case 'bg-color':
                this.showModal('#bg-modal');
                break;
            case 'bg-colors':
                this.closeModal('.images__buttons')
                this.showModal('.color__buttons-bg');
                break;
            case 'bg-images':
                this.closeModal('.color__buttons-bg')
                this.showModal('.images__buttons');
                break;
            case 'sign-in':
                this.showModal('#sign-modal');
                break;
        }
    }
    showModal(modalSelector) {
        let modal = document.querySelector(modalSelector);
        modal.classList.toggle('hidden');
    }

    closeModal(modalSelector) {
        let modal = document.querySelector(modalSelector);
        modal.classList.add('hidden');
    }

    closeList = (list) => {
        list.classList.add('hidden');
    }
    validateSingInInputs() {
        this.login = 'admin';
        this.password = 'password';

        this.loginInput = document.querySelector('[data-input="login"]')
        this.passwordInput = document.querySelector('[data-input="password"]')
        this.signInButton = document.querySelector('[data-input="button"]')
        this.inputBlock = document.querySelector('.inputs');

        this.messageEmpty = document.createElement('p');
        this.messageEmpty.textContent = 'Value is empty';
        this.messageEmpty.classList.add('error')

        this.messageIncorrect = document.createElement('p');
        this.messageIncorrect.textContent = 'Check your login or password';
        this.messageIncorrect.classList.add('error')


        this.signOut = document.querySelector('[data-change="sign-out"]')
        this.signIn = document.querySelector('[data-change="sign-in"]')

        this.signInButton.addEventListener('click', () => {
            if (this.loginInput.value === '' || this.passwordInput.value === '') {
                this.loginInput.classList.add('invalid');
                this.passwordInput.classList.add('invalid');
                this.inputBlock.append(this.messageEmpty);
                this.messageIncorrect.remove()
            } else if (this.loginInput.value !== this.login || this.passwordInput.value !== this.password) {
                this.loginInput.classList.add('invalid');
                this.passwordInput.classList.add('invalid');
                this.inputBlock.append(this.messageIncorrect);
                this.messageEmpty.remove();
            } else {
                this.loginInput.value = ''
                this.passwordInput.value = ''
                this.loginInput.classList.remove('invalid')
                this.passwordInput.classList.remove('invalid')
                this.messageEmpty.remove();
                this.messageIncorrect.remove();
                this.closeModal('#sign-modal')
                this.signOut.classList.remove('hidden')
                this.signIn.classList.add('hidden')
                editButton.disabled = false;
            }
        })

    }

    logOut() {
        this.cancel = document.querySelector('[data-click="cancel"]')
        this.confirm = document.querySelector('[data-click="confirm"]')
        this.signOut.addEventListener('click', () => {
            this.showModal('#sign-out')
        })
        this.cancel.addEventListener('click', () => {
            this.closeModal('#sign-out')
        })

        this.confirm.addEventListener('click', () => {
            this.closeModal('#sign-out')
            this.signOut.classList.add('hidden')
            this.signIn.classList.remove('hidden')
            editButton.disabled = true;
        })
    }

}

let textEdit = new TextEditor();

textEdit.logOut()