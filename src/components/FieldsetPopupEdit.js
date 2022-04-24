import '../index.css';

function FieldsetPopupEdit() {
  return (
    <fieldset className="form__fieldset">
      <div className="form__field">
        <input id="user-name-input" className="form__input form__input_role_user-name" type="text" name="user-name" autocomplete="off" placeholder="Ваше имя" minlength="2" maxlength="40" required />
        <span className="form__input-error user-name-input-error"></span>
      </div>
      <div className="form__field">
        <input id="user-info-input" className="form__input form__input_role_user-info" type="text" name="user-info" autocomplete="off" placeholder="Ваша профессия" minlength="2" maxlength="200" required />
        <span className="form__input-error user-info-input-error"></span>
      </div>
    </fieldset>
  );
}

export default FieldsetPopupEdit;