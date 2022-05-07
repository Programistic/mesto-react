import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Card extends React.Component {

  static contextType = CurrentUserContext;
  
  handleClick = () => {
    this.props.onCardClick(this.props);
  } 

  render() {

    const isOwn = this.props.card.owner._id === this.context._id;
    const cardDeleteButtonClassName = (isOwn ? 'card__button-delete' : 'card__button-delete_inactive');

    const isLiked = this.props.card.likes.some(like => like._id === this.context._id);
    const cardLikeSetClassName = (isLiked ? 'card__like_liked' : '');

    return (
      <li className="card">
        <img className="card__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick} />
        <button className={`button ${cardDeleteButtonClassName}`} type="button" aria-label="Удалить"></button>
        <div className="card__inner-container">
          <h2 className="card__title">{this.props.card.name}</h2>
            <button className="button card__button-like" type="button" aria-label="Симпатия">
              <span className={`card__like ${cardLikeSetClassName}`}></span>
              <span className="card__like-counter">{this.props.card.likes.length}</span>
            </button>  
        </div>
      </li>
    );
  }

}

export default Card;