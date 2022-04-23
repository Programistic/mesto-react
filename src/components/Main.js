import React from 'react';
import '../pages/index.css';
import profileAvatar from '../images/Kusto.jpg';

function Main() {
  return (
    <div>
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар"></img>
        <div className="profile__edit-icon"></div>    
        <div className="profile__inner-container">
          <h1 className="profile__user-name">Жак-Ив Кусто</h1>
          <button className="button profile__button-edit" type="button" aria-label="Редактировать"></button>
        </div>
        <p className="profile__user-info">Исследователь океана</p>
        <button className="button profile__button-add" type="button" aria-label="Добавить"></button> 
      </section>

      <section className="card-repository">
        <ul className="cards">

        </ul>
      </section>
    </div>
  );
}

export default Main;