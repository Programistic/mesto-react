import React from 'react';
import PopupWithForm from './PopupWithForm';
import FieldsetPopupEdit from './FieldsetPopupEdit';

class EditProfilePopup extends React.Component {

  render() {
    return (
      <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <FieldsetPopupEdit />
      </PopupWithForm>
    );  
  }
}

export default EditProfilePopup;
