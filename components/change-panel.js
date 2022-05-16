class ChangePanel {
  constructor(listId) {
    this.list = document.getElementById(listId);
    this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
    this.closeModalBtn = document.querySelector(`[data-close="${listId}"]`);
    this.main = document.querySelector('#main');
  }

  changePanel = () => {
    this.toggleModalBtn.addEventListener('click', () => {
      document.querySelector('#log-out').classList.toggle('hidden');
      document.querySelector('#log-in').classList.toggle('hidden');
      if (!this.checkPanelTextContent()) {
        this.main.querySelectorAll('p').forEach((p) => {
          let textArea = document.createElement('input');
          textArea.setAttribute('type', 'text');
          textArea.classList.add('text-area');
          textArea.value = p.textContent;
          p.remove();
          this.main.querySelector('.text__block').append(textArea);
          document.querySelector('.edit-panel').classList.remove('hidden');
          document.querySelector('.view-panel').classList.add('hidden');
          this.main.classList.add('main_edit');
        });
      } else {
        const textAreaArray = document.querySelectorAll('.text-area');

        textAreaArray.forEach((area) => {
          let editedText = document.createElement('p');
          editedText.classList.add('text', 'main__text');
          editedText.textContent = area.value;

          this.main.querySelector('.text__block').append(editedText);

          area.remove();
        });
        document.querySelector('.view-panel').classList.remove('hidden');
        document.querySelector('.edit-panel').classList.add('hidden');
        this.main.classList.remove('main_edit');
      }
    });
  };

  checkPanelTextContent = () => {
    if (document.querySelector('#log-in').classList.contains('hidden')) {
      return true;
    }
  };
}

const dropdownLogIn = new ChangePanel('log-in');
dropdownLogIn.changePanel();

const dropdownLogOut = new ChangePanel('log-out');
dropdownLogOut.changePanel();
