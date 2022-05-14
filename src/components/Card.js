import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  
  const handleClick = () => {
    props.onCardClick(props.card);
  }

  const handleLikeClick = () => {
    props.onCardLike(props.card);
  }

  const handleDeleteClick =() => {
    props.onCardDelete(props.card);
  }

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (isOwn ? 'card__button-delete' : 'card__button-delete_inactive');

  const isLiked = props.card.likes.some(like => like._id === currentUser._id);
  const cardLikeSetClassName = (isLiked ? 'card__like_liked' : '');

  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <button className={`button ${cardDeleteButtonClassName}`} type="button" aria-label="Удалить" onClick={handleDeleteClick}></button>
      <div className="card__inner-container">
        <h2 className="card__title">{props.card.name}</h2>
          <button className="button card__button-like" type="button" aria-label="Симпатия" onClick={handleLikeClick}>
            <span className={`card__like ${cardLikeSetClassName}`}></span>
            <span className="card__like-counter">{props.card.likes.length}</span>
          </button>  
      </div>
    </li>
  );
}

export default Card;