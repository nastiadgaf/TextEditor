class ActionPanel {
  constructor(main) {
    this.main = main;
    this.styleElements = document.querySelectorAll('[data-type]');
    document
      .querySelectorAll('[data-action="change-style-panel"]')
      .forEach((item) => {
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

            this.getActiveStyles();
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

  removeAllActiveStyles = () => {
    this.styleElements.forEach((btn) => {
      btn.classList.remove('active-style');
    });
  };

  getActiveStyles = () => {
    this.removeAllActiveStyles();
    this.styleElements.forEach((btn) => {
      if (
        btn.dataset.value === this.main.style.getPropertyValue(btn.dataset.type)
      ) {
        btn.classList.add('active-style');
      }
    });
  };
}

const action = new ActionPanel(document.getElementById('main'));
