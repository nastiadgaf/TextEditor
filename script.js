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
            'arial', 'georgia', 'impact', 'tahoma', 'times', 'verdana'
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

        }
    }

    clickOnStyleButtons(e) {
        const actionTypes = ['bold', 'italic', 'under', 'through', 'left', 'center', 'right', 'font', 'size']

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

        const openList = (list) => {
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
                openList(selectFont);
                break;
            case 'size':
                openList(selectSize);
        }
    }
}

let textEdit = new TextEditor();