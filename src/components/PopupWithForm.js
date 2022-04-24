import React from 'react';
import '../index.css';

function PopupWithForm() {
  return (
    <>
      <div className="popup popup_role_edit">
        <div className="popup__container">
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="form" name="user-edit" novalidate>
            <fieldset className="form__fieldset">
              <div className="form__field">
                <input id="user-name-input" className="form__input form__input_role_user-name" type="text" name="user-name" autocomplete="off" placeholder="Ваше имя" minlength="2" maxlength="40" required></input>
                <span className="form__input-error user-name-input-error"></span>
              </div>
              <div className="form__field">
                <input id="user-info-input" className="form__input form__input_role_user-info" type="text" name="user-info" autocomplete="off" placeholder="Ваша профессия" minlength="2" maxlength="200" required></input>
                <span className="form__input-error user-info-input-error"></span>
              </div>
            </fieldset>
            <button className="form__submit button" type="submit" aria-label="Сохранить">Сохранить</button>
          </form>
        </div>
        <button className="button popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>

      <div className="popup popup_role_create">
      <div className="popup__container">
        <h2 className="popup__heading">Новое место</h2>
        <form className="form" name="place-add" novalidate>
          <fieldset className="form__fieldset">
            <div className="form__field">
              <input id="place-name-input" className="form__input form__input_role_place-name" type="text" name="place-name" autocomplete="off" placeholder="Название" minlength="2" maxlength="30" required></input>
              <span className="form__input-error place-name-input-error"></span>
            </div>
            <div className="form__field">
              <input id="place-image-input" className="form__input form__input_role_place-image" type="url" name="place-image" autocomplete="off" placeholder="Ссылка на картинку" required></input>
              <span className="form__input-error place-image-input-error"></span>
            </div>
          </fieldset>
          <button className="form__submit button" type="submit" aria-label="Создать"></button>
        </form>
      </div>
      <button className="button popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>

      <div className="popup popup_role_avatar-update">
      <div className="popup__container">
        <h2 className="popup__heading">Обновить аватар</h2>
        <form className="form" name="avatar-update" novalidate>
          <fieldset className="form__fieldset">
            <div className="form__field">
              <input id="avatar-image-input" className="form__input form__input_role_avatar-image" type="url" name="avatar-image" autocomplete="off" placeholder="Ссылка на фото" required></input>
              <span className="form__input-error avatar-image-input-error"></span>
            </div>
          </fieldset>
          <button className="form__submit button" type="submit" aria-label="Сохранить"></button>
        </form>
      </div>
      <button className="button popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </>
  );

}

export default PopupWithForm;
