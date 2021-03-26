const Keyboard = {
	elements: {
		main: null,
		keysContainer: null,
		keys: [],
	},

	eventHandlers: {
		onInput: null,
		onClose: null,
	},

	properties: {
		value: '',
		capsLock: false,
	},

	init() {
		//Creacion de elementos principales
		this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

		// Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
	},

	_createKeys() {
		const fragment = document.createDocumentFragment();
		const keyLayout = [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'0',
			'backspace',
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'o',
			'p',
			'caps',
			'a',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
			'enter',
			'done',
			'z',
			'x',
			'c',
			'v',
			'b',
			'n',
			'm',
			',',
			'.',
			'?',
			'space',
		];

		//Crear HTML para los iconos
		const createIconHTML = (icon_name) => {
			return `<i class="material-icons">${icon_name}</i>`;
		};
		keyLayout.forEach((key) => {
			const keyElement = document.createElement('button');
			const insertLineBreak = ['backspace', 'p', 'enter', '?'].indexOf(key) !== -1;

			//Agregar atributos y clases
			keyElement.setAttribute('type', 'button');
			keyElement.classList.add('keyboard__key');

			switch (key) {
				case 'backspace':
					keyElement.classList.add('keyboard__key--wide');
					keyElement.innerHTML = createIconHTML('backspace');
					keyElement.addEventListener('click', () => {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this._triggerEvent('onInput');
					});
					break;
				case 'caps':
					keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
					keyElement.innerHTML = createIconHTML('keyboard_capslock');
					keyElement.addEventListener('click', () => {
						this._toggleCapsLock();
						keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
					});
					break;
				case 'enter':
					keyElement.classList.add('keyboard__key--wide');
					keyElement.innerHTML = createIconHTML('keyboard_return');
					keyElement.addEventListener('click', () => {
						this.properties.value += '\n';
						this._triggerEvent('onInput');
					});
					break;

				case 'space':
					keyElement.classList.add('keyboard__key--extra-wide');
					keyElement.innerHTML = createIconHTML('space_bar');
					keyElement.addEventListener('click', () => {
						this.properties.value += ' ';
						this._triggerEvent('onInput');
					});
					break;

				case 'done':
					keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
					keyElement.innerHTML = createIconHTML('check_circle');
					keyElement.addEventListener('click', () => {
						this.close();
						this._triggerEvent('onClose');
					});
					break;
				default:
					keyElement.textContent = key.toLocaleLowerCase();
					keyElement.addEventListener('click', () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLocaleLowerCase();
                        this._triggerEvent("onInput");
					});
					break;
            }
            
            fragment.appendChild(keyElement);

            if(insertLineBreak){
                fragment.appendChild(document.createElement("br"));
            }

            return fragment;
		});
	},
	_triggerEvent(handlerName) {
		console.log('Event Triggered! Name: ' + handlerName);
	},

	_toggleCapsLock() {
		console.log('Caps Lock Toggled!');
	},

	open(initialValue, onInput, onClose) {},

	close() {},
};

window.addEventListener('DOMContentLoaded', () => {
	Keyboard.init();
});
