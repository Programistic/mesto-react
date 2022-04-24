import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

  function handleEditProfileClick() {
    document.querySelector('.popup_role_edit').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_role_create').classList.add('popup_opened');
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_role_avatar-update').classList.add('popup_opened');
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} handleEditAvatarClick={handleEditAvatarClick}/>
        <Footer />
        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" children="edit"/>
        <PopupWithForm name="create" title="Новое место" buttonText="Создать" children="create"/>
        <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" children="avatar-update"/>
        <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да"/>
      </div>
    </div>
  );
}

export default App;

