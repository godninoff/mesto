import { initialCards } from '../components/initial-сards.js';
import {FormValidator}  from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import './index.css';

const popupEdit = '.popup_edit';
const popupAddCard = '.popup_add-card';
const profileOpenButton = document.querySelector('.profile__button-edit');
const popupAddCardButton = document.querySelector('.profile__add-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description');
const newName = '.profile__title';
const newJob = '.profile__subtitle';
const editProfileForm = document.getElementById('form-profile');
const newCardForm = document.querySelector('.popup_add-card');
const popupPhoto = '.popup_card-open';
const renderElements = '.elements';
const cardsTemplate = '#elements-card';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__form-error_active'
}; 

const editProfileFormValidator = new FormValidator(validationConfig, editProfileForm);
editProfileFormValidator.enableValidation();
const addCardFormValidator = new FormValidator(validationConfig, newCardForm);
addCardFormValidator.enableValidation();
const popupImage = new PopupWithImage(popupPhoto);

const createCard = (data) => {
  const card = new Card(data, cardsTemplate, () => popupImage.open(data.link, data.name));
  const cardElement = card.generateCard();
  return cardElement;
};

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(createCard(item));
    },
  },
  renderElements
);

const userInfo = new UserInfo({
  userName: newName,
  userJob: newJob,
});

const handlePopupEdit = () => {
  const profileInfo = userInfo.getUserInfo();
  inputName.value = profileInfo.name;
  inputJob.value = profileInfo.job;
  editProfileFormValidator.removeErrorMessages();
  popupEditProfile.open();
};

const popupEditProfile = new PopupWithForm({
  popupSelector: popupEdit,
  submitHandler: (data) => {
    userInfo.setUserInfo({
      userNameValue: data['name'],
      userJobValue: data['description'],
    });
    popupEditProfile.close();
  },
});

const popupNewCard = new PopupWithForm({
  popupSelector: popupAddCard,
  submitHandler: (data) => {
    cardsList.addItem(createCard({
      name: data['place-input'],
      link: data['img-link'],
    }));
    popupNewCard.close();
  },
});

popupAddCardButton.addEventListener('click', () => {
  popupNewCard.open();
  addCardFormValidator.removeErrorMessages();
});
profileOpenButton.addEventListener('click', handlePopupEdit);

popupImage.setEventListeners();
popupNewCard.setEventListeners();
popupEditProfile.setEventListeners();

cardsList.renderItems();