const cohortID = 'cohort-39';
const token = 'fed91f6d-1f71-4682-bc63-ccd602fc60c4';
const baseURL = 'https://mesto.nomoreparties.co/v1/';
const cardURL = `${baseURL}${cohortID}/cards`;
const userURL = `${baseURL}${cohortID}/users/me`;
const avatarURL =`${baseURL}${cohortID}/users/me/avatar`;

class Api {
  constructor(userURL, cardURL, avatarURL, token) {
    this._userURL = userURL;
    this._cardURL = cardURL;
    this._avatarURL = avatarURL;
    this._token = token;
    this._headers = { authorization: this._token, 'Content-Type': 'application/json' }
  }

  getProfile() {
    return fetch(this._userURL, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  getCards() {
    return fetch(this._cardURL, {
      headers: this._headers
    })
      .then(res => this._getResponseData(res))
  }

  setUserInfo(userData) {
    return fetch(this._userURL, {
      method: 'PATCH',
      headers: this._headers,
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
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarData['avatar-image']
      })
    })
      .then(res => this._getResponseData(res))
  }

  setCard(cardData) {
    return fetch(this._cardURL, {
      method: 'POST',
      headers: this._headers,
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
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  addLike(cardID) {
    return fetch(this._cardURL + `/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  deleteLike(cardID) {
    return fetch(this._cardURL + `/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._getResponseData(res));
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
  }
}

const api = new Api(userURL, cardURL, avatarURL, token);

export default api;
