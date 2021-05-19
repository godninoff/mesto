import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
	constructor({popupSelector, submitHandler}) {
		super(popupSelector)
		this._submitHandler = submitHandler;
		this._form = this._popup.querySelector('.popup__form');
		this._formInputs = this._popup.querySelectorAll('.popup__input');
	}

	_getInputValues() {
		this._inputValues = {};
		this._formInputs.forEach(input => {
			this._inputValues[input.name] = input.value
		});

		return this._inputValues;
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._submitHandler(this._getInputValues());
		})
	};

	close() {
		super.close();
		this._form.reset();
	}
}

