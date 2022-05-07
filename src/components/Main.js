import React from 'react';
import '../index.css';
import api from '../utils/Api.js';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: null, userDescription: null, userAvatar: null, cards: [] };
  }
  
  static contextType = CurrentUserContext;

  componentDidMount() {
    api.getCards()
      .then(getCardsArray => {
        this.setState(
          {
            cards: getCardsArray
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === this.context._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then(getCard => {
        const newCardsArray = this.state.cards.map(oldCard => oldCard._id === getCard._id ? getCard : oldCard);
        this.setState(
          {
            cards: newCardsArray
          }
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    this.cardList = this.state.cards.map(card =>
      <Card key={card._id} card={card} onCardLike={this.handleCardLike} onCardClick={this.props.onCardClick} />
    );

    return (
      <main>
        <section className="profile">
          <img className="profile__avatar" src={this.context.avatar} alt="Аватар"/>
          <div className="profile__edit-icon" onClick={this.props.onEditAvatar}></div>    
          <div className="profile__inner-container">
            <h1 className="profile__user-name">{this.context.name}</h1>
            <button className="button profile__button-edit" type="button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
          </div>
          <p className="profile__user-info">{this.context.about}</p>
          <button className="button profile__button-add" type="button" aria-label="Добавить" onClick={this.props.onAddPlace}></button> 
        </section>
        <section className="card-repository">
          <ul className="cards">
            {this.cardList}
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;