import React from 'react';
import '../index.css';

function popupWithEmptyForm() {
  return (
    <div className="popup popup_role_confirm">
      <div className="popup__container">
        <h2 className="popup__heading">Вы уверены?</h2>
        <form className="form" name="delete-confirm">
          <button className="form__submit button" type="submit" aria-label="Нажать для подтверждения">Да</button>
        </form>
      </div>
      <button className="button popup__button-close" type="button" aria-label="Закрыть"></button>
    </div>
  );
}

export default popupWithEmptyForm;