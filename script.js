const buttons = document.querySelectorAll('[data-click="chage-text-style"]');
const text = document.querySelectorAll('.text')

class TextEditor {
    constructor() {
        document.addEventListener('click', (e) => this.clickOnButtons(e))
    }

    clickOnButtons(e) {
        const actionTypes = ['bold', 'italic', 'under', 'through', 'left', 'center', 'right']

        let currentType;

        for (let type of actionTypes) {
            if (e.target.dataset.change === type) currentType = type;
        }

        function toggleTextClass(className){
            text.forEach(item => {
                item.classList.toggle(className);
            })
        }

        function removeAlignClasses(){
            text.forEach(item => {
                item.classList.remove('right', 'left', 'center');
               // item.classList.remove('right');
               // item.classList.remove('right');
            })
        }

        switch (currentType) {
            case 'bold':
                toggleTextClass('bold');
                break;
            case 'italic':
                toggleTextClass('italic');
                break;
            case 'under':
                toggleTextClass('under');
                break;
            case 'through':
                toggleTextClass('through');
                break;
            case 'left':
                removeAlignClasses();
                toggleTextClass('left');
                
                break;
            case 'center':
                removeAlignClasses();
                toggleTextClass('center');
                
                break;
            case 'right':
                removeAlignClasses();
                toggleTextClass('right');
                break;
        }
    }
}

let textEdit = new TextEditor();