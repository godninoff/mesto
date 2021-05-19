export class FormValidator {
    constructor (validationConfig, formElement) {
      this._validationConfig = validationConfig
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
      this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);  
    }
  
  _showInputError = (inputElement, errorMessage) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._validationConfig.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._validationConfig.errorClass);
  };
  
  _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._validationConfig.inputErrorClass);
      errorElement.classList.remove(this._validationConfig.errorClass);
      errorElement.textContent = '';
  };
  
  _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
  
  _setEventListeners = () => {
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(); 
        });
      });
    };  
  
    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
      };
  
    _hasInvalidInput = () => {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    };
    
    _toggleButtonState = (inputList) => { 
      if (this._hasInvalidInput(inputList)) {
          this._buttonElement.setAttribute("disabled", true);
          this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
      } else {
          this._buttonElement.removeAttribute("disabled");
          this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
      }
    };
    removeErrorMessages() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
      });
    }
  }