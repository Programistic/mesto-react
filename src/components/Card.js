import React from 'react';
import '../index.css';

function Card(props) {
  return (
    <li className="card">
      <img className="card__image" src={props.link} alt=""></img>
      <button className="button card__button-delete" type="button" aria-label="Удалить"></button>
      <div className="card__inner-container">
        <h2 className="card__title">{props.title}</h2>
          <button className="button card__button-like" type="button" aria-label="Симпатия">
            <span className="card__like"></span>
            <span className="card__like-counter">{props.number}</span>
          </button>  
      </div>
    </li>
  );
}

export default Card;