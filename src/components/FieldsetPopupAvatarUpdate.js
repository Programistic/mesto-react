import '../index.css';

function FieldsetPopupAvatarUpdate() {
  return (
    <fieldset className="form__fieldset">
      <div className="form__field">
        <input id="avatar-image-input" className="form__input form__input_role_avatar-image" type="url" name="avatar-image" autocomplete="off" placeholder="Ссылка на фото" required />
        <span className="form__input-error avatar-image-input-error"></span>
      </div>
    </fieldset>
  );
}

export default FieldsetPopupAvatarUpdate;