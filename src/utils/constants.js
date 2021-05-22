  export const popupEdit = '.popup_edit';
  export const popupAddCard = '.popup_add-card';
  export const profileOpenButton = document.querySelector('.profile__button-edit');
  export const popupAddCardButton = document.querySelector('.profile__add-button');
  export const inputName = document.querySelector('.popup__input_type_name');
  export const inputJob = document.querySelector('.popup__input_type_description');
  export const newName = '.profile__title';
  export const newJob = '.profile__subtitle';
  export const editProfileForm = document.getElementById('form-profile');
  export const newCardForm = document.querySelector('.popup_add-card');
  export const popupPhoto = '.popup_card-open';
  export const renderElements = '.elements';
  export const cardsTemplate = '#elements-card';

  export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__form-error_active'
}; 

export const initialCards = [
  {
    name: 'Сантьяго Бернабеу',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/bernabeu.jpg?raw=true'
  },
  {
    name: 'Камп Ноу',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/Nou.jpg?raw=true'
  },
  {
    name: 'Энфилд',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/enfield.jpg?raw=true'
  },
  {
    name: 'Сан-Сиро',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/siro.jpg?raw=true'
  },
  {
    name: 'Стадио Олимпико',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/olympiko.jpg?raw=true'
  },
  {
    name: 'Стад де Франс',
    link: 'https://github.com/godninoff/mesto/blob/master/src/images/france.jpg?raw=true'
  }
]; 