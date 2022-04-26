import React from 'react';

class Card extends React.Component {
  
  handleClick = () => {
    this.props.onCardClick(this.props);
  } 

  render() {
    return (
      <li className="card">
        <img className="card__image" src={this.props.link} alt={this.props.title} onClick={this.handleClick} />
        <button className="button card__button-delete" type="button" aria-label="Удалить"></button>
        <div className="card__inner-container">
          <h2 className="card__title">{this.props.title}</h2>
            <button className="button card__button-like" type="button" aria-label="Симпатия">
              <span className="card__like"></span>
              <span className="card__like-counter">{this.props.number}</span>
            </button>  
        </div>
      </li>
    );
  }

}

export default Card;