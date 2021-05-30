export class Api {
    constructor({address, headers}) {
        this._address = address;
        this._headers = headers;
    }

getUserInfo() {
    return fetch(`${this._address}/users/me`, {
        method: 'GET',
        headers: this._headers
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

getInitialCards() {
    return fetch(`${this._address}/cards`, {
        method: 'GET',
        headers: this._headers
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

setUserInfo(formData) {
    return fetch(`${this._address}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: formData.name,
            about: formData.description
        })
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

createCard(formData) {
    return fetch(`${this._address}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
            name: formData.name,
            link: formData.link
        })
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

removeCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

 likeStanding(cardId, like) {
    return fetch(`${this._address}/cards/likes/${cardId}`, {
        method: like ? 'DELETE' : 'PUT',
        headers: this._headers,
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}

updateAvatar(formData) {
    return fetch(`${this._address}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar: formData.avatar
        })
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
}
}