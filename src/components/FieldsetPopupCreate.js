import '../index.css';

function FieldsetPopupCreate() {
  return (
    <fieldset className="form__fieldset">
      <div className="form__field">
        <input id="place-name-input" className="form__input form__input_role_place-name" type="text" name="place-name" placeholder="Название" required />
        <span className="form__input-error place-name-input-error"></span>
      </div>
      <div className="form__field">
        <input id="place-image-input" className="form__input form__input_role_place-image" type="url" name="place-image" placeholder="Ссылка на картинку" required />
        <span className="form__input-error place-image-input-error"></span>
      </div>
    </fieldset>
  );
}

export default FieldsetPopupCreate;