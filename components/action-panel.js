class ActionPanel {
  constructor(panel, dropdownButtons, main) {
    this.panel = panel;
    this.main = main;
    this.dropdownButtons = dropdownButtons;
    this.panel.forEach((item) => {
      item.addEventListener(
        'click',
        ({
          target: {
            dataset: { type, value },
          },
        }) => {
          this.main.style.getPropertyValue(type) === value
            ? this.removeStyle(type, value)
            : this.addStyle(type, value);

          this.getActiveStyle();
        }
      );
    });
  }

  addStyle = (type, value) => {
    this.main.style.setProperty(type, value);
  };

  removeStyle = (type) => {
    this.main.style.removeProperty(type);
  };

  getActiveStyle = () => {
    document.querySelectorAll('[data-type]').forEach((btn) => {
      btn.classList.remove('active-style');
    });

    document.querySelectorAll('[data-type]').forEach((btn) => {
      if (
        btn.dataset.value === this.main.style.getPropertyValue(btn.dataset.type)
      ) {
        btn.classList.add('active-style');
      }
    });
  };
}

const action = new ActionPanel(
  document.querySelectorAll('[data-action="change-style-panel"]'),
  document.querySelectorAll('[data-style-dropdown="dropdown-btn"]'),
  document.getElementById('main')
);
