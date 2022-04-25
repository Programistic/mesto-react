// Api.js, создание класса для работы с API

class Api {
  constructor(userURL, cardURL, avatarURL, token) {
    this._userURL = userURL;
    this._cardURL = cardURL;
    this._avatarURL = avatarURL;
    this._token = token;
  }

  getProfile() {
    return fetch(this._userURL, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._getResponseData(res));
  }

  getCards() {
    return fetch(this._cardURL, {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._getResponseData(res))
  }

  setUserInfo(userData) {
    return fetch(this._userURL, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userData['user-name'],
        about: userData['user-info']
      })
    })
      .then(res => this._getResponseData(res))
  }

  setAvatar(avatarData) {
    return fetch(this._avatarURL, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarData['avatar-image']
      })
    })
      .then(res => this._getResponseData(res))
  }

  setCard(cardData) {
    return fetch(this._cardURL, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: cardData['place-name'],
        link: cardData['place-image']
      })
    })
      .then(res => this._getResponseData(res))
  }

  deleteCard(cardID) {
    return fetch(this._cardURL + `/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._getResponseData(res));
  }

  addLike(cardID) {
    return fetch(this._cardURL + `/${cardID}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._getResponseData(res));
  }

  deleteLike(cardID) {
    return fetch(this._cardURL + `/${cardID}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._getResponseData(res));
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
  }
}

const cohortID = 'cohort-39';
const token = 'fed91f6d-1f71-4682-bc63-ccd602fc60c4';
const cardURL = `https://mesto.nomoreparties.co/v1/${cohortID}/cards`;
const userURL = `https://mesto.nomoreparties.co/v1/${cohortID}/users/me`;
const avatarURL =`https://mesto.nomoreparties.co/v1/${cohortID}/users/me/avatar`;

const api = new Api(userURL, cardURL, avatarURL, token);

export default api;
