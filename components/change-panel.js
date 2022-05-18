class ChangePanel {
  constructor(listId) {
    this.list = document.getElementById(listId);
    this.toggleModalBtn = document.querySelector(`[data-modal="${listId}"]`);
    this.closeModalBtn = document.querySelector(`[data-close="${listId}"]`);
    this.main = document.querySelector('#main');
  }

  transformParagraphToTextArea = () => {
    this.main.querySelectorAll('p').forEach((p) => {
      let textArea = document.createElement('input');
      textArea.setAttribute('type', 'text');
      textArea.classList.add('text-area');
      textArea.value = p.textContent;
      p.remove();

      this.main.querySelector('.text__block').append(textArea);
      this.main.classList.add('main_edit');
    });
  };

  transformTextAreaToParagraph = () => {
    const textAreaArray = document.querySelectorAll('.text-area');

    textAreaArray.forEach((area) => {
      let editedText = document.createElement('p');
      editedText.classList.add('text', 'main__text');
      editedText.textContent = area.value;

      this.main.querySelector('.text__block').append(editedText);

      area.remove();
    });
  };

  changeVisiblePanel = (hiddenPanel, shownPanel) => {
    document.querySelector(hiddenPanel).classList.remove('hidden');
    document.querySelector(shownPanel).classList.add('hidden');
  };

  togglePanels = (panel) => {
    document.querySelector(panel).classList.toggle('hidden');
  };
  changePanel = () => {
    this.toggleModalBtn.addEventListener('click', () => {
      this.togglePanels('#log-out');
      this.togglePanels('#log-in');
      this.changeVisiblePanel('.edit-panel', '.view-panel');
      if (!this.checkPanelTextContent()) {
        this.transformParagraphToTextArea();
      } else {
        this.transformTextAreaToParagraph();
        this.changeVisiblePanel('.view-panel', '.edit-panel');
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
