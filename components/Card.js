export class Card {
    constructor(data, cardSelector, openImagePopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._cardSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);
    
        return cardElement;
    }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const elementImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__name').textContent = this._name;
    elementImage.src = this._link;
    elementImage.alt = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._like = this._element.querySelector('.element__like')
    this._like.addEventListener('click', () => {
      this._likeClick();
    })
    this._element.querySelector('.element__remove').addEventListener('click', () => {
      this._likeClickRemove();
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openImagePopup(this._name, this._link,);
    })
  }
  
  _likeClick() {
    this._like.classList.toggle('element__like_toggle-active');
  } 
  
  _likeClickRemove() {
    this._element.remove();
  }
}; 