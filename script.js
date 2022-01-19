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
