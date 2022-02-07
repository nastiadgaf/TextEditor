class ActionPanel {
	constructor(panel, main) {
		this.panel = panel;
		this.main = main;
		this.panel.addEventListener('click', ({target: {dataset: {type,value}}}) => {
			if (this.main.style.getPropertyValue(type) === value) {
				this.removeStyle(type, value);
			} else {
				this.addStyle(type, value);
			}
		})
	}

	addStyle = (type, value) => {
		document.querySelectorAll('.buttons__item').forEach(btn => {
			btn.classList.remove('active');
		})
		document.querySelector(`[data-value="${value}"]`).classList.add('active');
		this.main.style.setProperty(type, value);
	}

	removeStyle = (type, value) => {
		this.main.style.removeProperty(type);
		document.querySelector(`[data-value="${value}"]`).classList.remove('active');
	}
}

const action = new ActionPanel(document.getElementById('header'), document.getElementById('main'));