import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  React.useEffect(() => {
    setUserName(currentUser.name);
    setUserDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setUserDescription(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateUser(userName, userDescription)
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__field">
          <input id="user-name-input" className="form__input form__input_role_user-name" type="text" name="user-name" value={userName || ''} onChange={handleNameChange} placeholder="Ваше имя" required />
          <span className="form__input-error user-name-input-error"></span>
        </div>
        <div className="form__field">
          <input id="user-info-input" className="form__input form__input_role_user-info" type="text" name="user-info" value={userDescription || ''} onChange={handleDescriptionChange} placeholder="Ваша профессия" required />
          <span className="form__input-error user-info-input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );  
}

export default EditProfilePopup;
