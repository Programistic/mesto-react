import React from 'react';
import '../index.css';
import api from '../utils/Api.js';
import Card from './Card.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: null, userDescription: null, userAvatar: null, cards: [] };
  }  

  componentDidMount() {
    Promise.all([api.getProfile(), api.getCards()])
      .then(([userData, cardsData]) => {
        this.setState(
          {
            userName: userData.name,
            userDescription: userData.about,
            userAvatar: userData.avatar,
            cards: cardsData,
          }
        );
        this.cardList = this.state.cards.map((card) => (
          <Card key={card._id} title={card.name} link={card.link} number={card.likes.length} onCardClick={this.props.onCardClick} />
        ))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <main>
        <section className="profile">
          <img className="profile__avatar" src={this.state.userAvatar} alt="Аватар"/>
          <div className="profile__edit-icon" onClick={this.props.onEditAvatar}></div>    
          <div className="profile__inner-container">
            <h1 className="profile__user-name">{this.state.userName}</h1>
            <button className="button profile__button-edit" type="button" aria-label="Редактировать" onClick={this.props.onEditProfile}></button>
          </div>
          <p className="profile__user-info">{this.state.userDescription}</p>
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