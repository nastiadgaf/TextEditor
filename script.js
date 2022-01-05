const body = document.body
const buttons = document.querySelectorAll('[data-click="change-text-style"]');
const fontButtons = document.querySelectorAll('[data-click="change-font-style]');
const text = document.querySelectorAll('.text')
const selectFont = document.querySelector('.select_font')
const selectSize = document.querySelector('.select_size')
const selectColor = document.querySelector('.select_color')

class TextEditor {
    constructor() {
        document.addEventListener('click', (e) => this.clickOnFontButtons(e))
        document.addEventListener('click', (e) => this.clickOnStyleButtons(e))
    }

    clickOnFontButtons(e) {
        const actionTypes = ['twelve', 'fourteen', 'sixteen', 'eighteen', 'twenty', 'twenty-two', 'twenty-five', 'thirty',
            'arial', 'georgia', 'impact', 'tahoma', 'times', 'verdana',
            'light-turquoise', 'dark-turquoise', 'light-green', 'dark-green', 'light-blue', 'blue', 'light-purple', 'dark-purple',
            'dark-blue', 'navy-blue', 'yellow', 'light-orange', 'orange', 'dark-orange', 'light-red', 'red',
            'white', 'light-grey', 'grey', 'dark-grey', 'black',
            'light-turquoise-bg', 'dark-turquoise-bg', 'light-green-bg', 'dark-green-bg', 'light-blue-bg', 'blue-bg', 'light-purple-bg', 'dark-purple-bg',
            'dark-blue-bg', 'navy-blue-bg', 'yellow-bg', 'light-orange-bg', 'orange-bg', 'dark-orange-bg', 'light-red-bg', 'red-bg',
            'white-bg', 'light-grey-bg', 'grey-bg', 'dark-grey-bg', 'black-bg',
            'bridge', 'field', 'forest', 'lake', 'mountains', 'rock', 'sun', 'tree', 'waterfall'
        ]

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        const addFontSize = (size) => {
            text.forEach(item => {
                item.classList.remove('twelve', 'fourteen', 'sixteen', 'eighteen', 'twenty', 'twenty-two', 'twenty-five', 'thirty')
                item.classList.add(size)
            })
        }

        const changeFontFamily = (font) => {
            text.forEach(item => {
                item.classList.remove('arial', 'georgia', 'impact', 'tahoma', 'times', 'verdana')
                item.classList.add(font)
            })
        }

        const changeFontColor = (color) => {
            text.forEach(item => {
                item.classList.remove('light-turquoise', 'dark-turquoise', 'light-green', 'dark-green', 'light-blue', 'blue', 'light-purple', 'dark-purple',
                    'dark-blue', 'navy-blue', 'yellow', 'light-orange', 'orange', 'dark-orange', 'light-red', 'red',
                    'white', 'light-grey', 'grey', 'dark-grey', 'black')
                item.classList.add(color)
            })
        }

        const changeBgColor = (color) => {
            body.classList.remove('bridge', 'field', 'forest', 'lake', 'mountains', 'rock', 'sun', 'tree', 'waterfall')
            body.classList.remove('light-turquoise-bg', 'dark-turquoise-bg', 'light-green-bg', 'dark-green-bg', 'light-blue-bg', 'blue-bg', 'light-purple-bg', 'dark-purple-bg',
                'dark-blue-bg', 'navy-blue-bg', 'yellow-bg', 'light-orange-bg', 'orange-bg', 'dark-orange-bg', 'light-red-bg', 'red-bg',
                'white-bg', 'light-grey-bg', 'grey-bg', 'dark-grey-bg', 'black-bg')
            body.classList.add(color)
        }

        const changeBgImage = (image) => {
            body.classList.remove('bridge', 'field', 'forest', 'lake', 'mountains', 'rock', 'sun', 'tree', 'waterfall')
            body.classList.add(image)
        }

        switch (currentType) {
            case 'twelve':
                addFontSize('twelve')
                break;
            case 'fourteen':
                addFontSize('fourteen')
                break;
            case 'sixteen':
                addFontSize('sixteen')
                break;
            case 'eighteen':
                addFontSize('eighteen')
                break;
            case 'twenty':
                addFontSize('twenty')
                break;
            case 'twenty-two':
                addFontSize('twenty-two')
                break;
            case 'twenty-five':
                addFontSize('twenty-five')
                break;
            case 'thirty':
                addFontSize('thirty')
                break;
            case 'arial':
                changeFontFamily('arial')
                break;
            case 'georgia':
                changeFontFamily('georgia')
                break;
            case 'impact':
                changeFontFamily('impact')
                break;
            case 'tahoma':
                changeFontFamily('tahoma')
                break;
            case 'times':
                changeFontFamily('times')
                break;
            case 'verdana':
                changeFontFamily('verdana')
                break;
            case 'light-turquoise':
                changeFontColor('light-turquoise')
                break;
            case 'dark-turquoise':
                changeFontColor('dark-turquoise')
                break;
            case 'light-green':
                changeFontColor('light-green')
                break;
            case 'dark-green':
                changeFontColor('dark-green')
                break;
            case 'light-blue':
                changeFontColor('light-blue')
                break;
            case 'blue':
                changeFontColor('blue')
                break;
            case 'light-purple':
                changeFontColor('light-purple')
                break;
            case 'dark-purple':
                changeFontColor('dark-purple')
                break;
            case 'dark-blue':
                changeFontColor('dark-blue')
                break;
            case 'navy-blue':
                changeFontColor('navy-blue')
                break;
            case 'yellow':
                changeFontColor('yellow')
                break;
            case 'light-orange':
                changeFontColor('light-orange')
                break;
            case 'orange':
                changeFontColor('orange')
                break;
            case 'dark-orange':
                changeFontColor('dark-orange')
                break;
            case 'light-red':
                changeFontColor('light-red')
                break;
            case 'red':
                changeFontColor('red')
                break;
            case 'white':
                changeFontColor('white')
                break;
            case 'light-grey':
                changeFontColor('light-grey')
                break;
            case 'grey':
                changeFontColor('grey')
                break;
            case 'dark-grey':
                changeFontColor('dark-grey')
                break;
            case 'black':
                changeFontColor('black')
                break;
            case 'light-turquoise-bg':
                changeBgColor('light-turquoise-bg')
                break;
            case 'dark-turquoise-bg':
                changeBgColor('dark-turquoise-bg')
                break;
            case 'light-green-bg':
                changeBgColor('light-green-bg')
                break;
            case 'dark-green-bg':
                changeBgColor('dark-green-bg')
                break;
            case 'light-blue-bg':
                changeBgColor('light-blue-bg')
                break;
            case 'blue-bg':
                changeBgColor('blue-bg')
                break;
            case 'light-purple-bg':
                changeBgColor('light-purple-bg')
                break;
            case 'dark-purple-bg':
                changeBgColor('dark-purple-bg')
                break;
            case 'dark-blue-bg':
                changeBgColor('dark-blue-bg')
                break;
            case 'navy-blue-bg':
                changeBgColor('navy-blue-bg')
                break;
            case 'yellow-bg':
                changeBgColor('yellow-bg')
                break;
            case 'light-orange-bg':
                changeBgColor('light-orange-bg')
                break;
            case 'orange-bg':
                changeBgColor('orange-bg')
                break;
            case 'dark-orange-bg':
                changeBgColor('dark-orange-bg')
                break;
            case 'light-red-bg':
                changeBgColor('light-red-bg')
                break;
            case 'red-bg':
                changeBgColor('red-bg')
                break;
            case 'white-bg':
                changeBgColor('white-bg')
                break;
            case 'light-grey-bg':
                changeBgColor('light-grey-bg')
                break;
            case 'grey-bg':
                changeBgColor('grey-bg')
                break;
            case 'dark-grey-bg':
                changeBgColor('dark-grey-bg')
                break;
            case 'black-bg':
                changeBgColor('black-bg')
                break;
            case 'bridge':
                changeBgImage('bridge')
                break;
            case 'field':
                changeBgImage('field')
                break;
            case 'forest':
                changeBgImage('forest')
                break;
            case 'lake':
                changeBgImage('lake')
                break;
            case 'mountains':
                changeBgImage('mountains')
                break;
            case 'rock':
                changeBgImage('rock')
                break;
            case 'sun':
                changeBgImage('sun')
                break;
            case 'tree':
                changeBgImage('tree')
                break;
            case 'waterfall':
                changeBgImage('waterfall')
                break;
        }
    }

    clickOnStyleButtons(e) {
        const actionTypes = ['bold', 'italic', 'under', 'through', 'left', 'center', 'right', 'font', 'size', 'color', 'close', 'bg-color', 'bg-colors', 'bg-images', 'bg-files']

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

        const showModal = (modalSelector) => {
            let modal = document.querySelector(modalSelector);

            modal.classList.toggle('hidden');
        }

        const closeModal = (modalSelector) => {
            let modal = document.querySelector(modalSelector);
            modal.classList.add('hidden');
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
                showModal('#color-modal');
                break;
            case 'close':
                closeModal('#color-modal');
                closeModal('#bg-modal');
                break;
            case 'bg-color':
                showModal('#bg-modal');
                break;
            case 'bg-colors':
                closeModal('.images__buttons')
                showModal('.color__buttons-bg');
                break;
            case 'bg-images':
                closeModal('.color__buttons-bg')
                showModal('.images__buttons');
                break;
        }
    }
}

let textEdit = new TextEditor();