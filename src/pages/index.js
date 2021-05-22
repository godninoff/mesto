import {initialCards} from '../utils/initial-сards.js';
import { popupEdit, popupAddCard, profileOpenButton, popupAddCardButton, inputName, inputJob, newName,
   newJob, editProfileForm, newCardForm, popupPhoto, renderElements, cardsTemplate, validationConfig } from '../utils/constants.js';
import {FormValidator}  from '../components/FormValidator.js';
import {Card} from '../components/Card.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import './index.css';

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
  editProfileFormValidator.resetValidation();
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
  addCardFormValidator.resetValidation();
});
profileOpenButton.addEventListener('click', handlePopupEdit);

popupImage.setEventListeners();
popupNewCard.setEventListeners();
popupEditProfile.setEventListeners();

cardsList.renderItems();