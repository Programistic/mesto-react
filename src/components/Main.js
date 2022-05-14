import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';


function Main(props) {

  const currentUser = useContext(CurrentUserContext);

  const cardList = props.cards.map((card) => {
    return (
      <Card key={card._id} card={card} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} onCardClick={props.onCardClick} />
    )
  });

  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
        <div className="profile__edit-icon" onClick={props.onEditAvatar}></div>    
        <div className="profile__inner-container">
          <h1 className="profile__user-name">{currentUser.name}</h1>
          <button className="button profile__button-edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__user-info">{currentUser.about}</p>
        <button className="button profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button> 
      </section>
      <section className="card-repository">
        <ul className="cards">
          {cardList}
        </ul>
      </section>
    </main>
  );
}

export default Main;