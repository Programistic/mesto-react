import React from 'react';
import '../index.css';
import profileAvatar from '../images/Kusto.jpg';

function Main() {
  return (
    <div>
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар"></img>
        <div className="profile__edit-icon" onClick={handleEditAvatarClick}></div>    
        <div className="profile__inner-container">
          <h1 className="profile__user-name">Жак-Ив Кусто</h1>
          <button className="button profile__button-edit" type="button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
        </div>
        <p className="profile__user-info">Исследователь океана</p>
        <button className="button profile__button-add" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button> 
      </section>

      <section className="card-repository">
        <ul className="cards">

        </ul>
      </section>
    </div>
  );

  function handleEditProfileClick() {
    document.querySelector('.popup_role_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_role_create').classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_role_avatar-update').classList.add('popup_opened');
  }
}

export default Main;