import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function FieldsetPopupEdit() {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  return (
    <fieldset className="form__fieldset">
      <div className="form__field">
        <input id="user-name-input" className="form__input form__input_role_user-name" type="text" name="user-name" value={name} onChange={handleNameChange} placeholder="Ваше имя" required />
        <span className="form__input-error user-name-input-error"></span>
      </div>
      <div className="form__field">
        <input id="user-info-input" className="form__input form__input_role_user-info" type="text" name="user-info" value={description} onChange={handleDescriptionChange} placeholder="Ваша профессия" required />
        <span className="form__input-error user-info-input-error"></span>
      </div>
    </fieldset>
  );
}

export default FieldsetPopupEdit;