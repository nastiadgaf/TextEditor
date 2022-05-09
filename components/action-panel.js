class ActionPanel {
  constructor(panel, dropdownButtons, main) {
    this.panel = panel;
    this.main = main;
    this.dropdownButtons = dropdownButtons;
    console.log(this.dropdownButtons);
    this.panel.forEach((item) => {
      item.addEventListener(
        'click',
        ({
          target: {
            dataset: { type, value, relatedModal },
          },
        }) => {
          this.main.style.getPropertyValue(type) === value
            ? this.removeStyle(type, value)
            : this.addStyle(type, value);

          this.dropdownButtons.forEach((btn) => {
            if (btn.dataset.relatedModal === relatedModal) {
              this.removeActiveClassToDropdownButtons(btn);
            }
          });
          console.log(relatedModal);
        }
      );
    });

    this.dropdownButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.addActiveClassToDropdownButtons(btn);
      });
    });
  }

  addStyle = (type, value) => {
    if (type == 'font-size' || type == 'font-family') {
      this.main.style.setProperty(type, value);
    } else {
      document.querySelectorAll('.buttons__item').forEach((btn) => {
        btn.classList.remove('active');
      });
      document.querySelector(`[data-value="${value}"]`).classList.add('active');
      this.main.style.setProperty(type, value);
    }
  };

  removeStyle = (type, value) => {
    this.main.style.removeProperty(type);
    document
      .querySelector(`[data-value="${value}"]`)
      .classList.remove('active');
  };

  addActiveClassToDropdownButtons = (button) => {
    button.classList.add('active');
  };

  removeActiveClassToDropdownButtons = (button) => {
    button.classList.remove('active');
  };
}

const action = new ActionPanel(
  document.querySelectorAll('[data-action="change-style-panel"]'),
  document.querySelectorAll('[data-style-dropdown="dropdown-btn"]'),
  document.getElementById('main')
);
