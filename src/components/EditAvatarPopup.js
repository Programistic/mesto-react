import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const inputAvatarSrc = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onUpdateAvatar(inputAvatarSrc.current.value);
    event.target.reset();
  }

  return (
    <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <div className="form__field">
          <input id="avatar-image-input" className="form__input form__input_role_avatar-image" type="url" name="avatar-image" ref={inputAvatarSrc} placeholder="Ссылка на фото" required />
          <span className="form__input-error avatar-image-input-error"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;