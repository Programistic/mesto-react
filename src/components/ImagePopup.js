import React from 'react';
import '../index.css';

function imagePopup() {
  return (
    <div className="popup popup_role_image-display">
      <img className="popup__image" src="/" alt=""></img>
      <p className="popup__image-caption"></p>
      <button className="button popup__button-close" type="button" aria-label="Закрыть"></button>
    </div>
  );
}

export default imagePopup;