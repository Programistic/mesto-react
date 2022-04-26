import React from 'react';
import FieldsetPopupEdit from './FieldsetPopupEdit.js'
import FieldsetPopupCreate from './FieldsetPopupCreate.js'
import FieldsetPopupAvatarUpdate from './FieldsetPopupAvatarUpdate.js'

class PopupWithForm extends React.Component {
  
  render() {
  
    const popupOpened = this.props.isOpen ? 'popup_opened' : false;
  
    return (
      <div className={`popup popup_role_${this.props.name} ${popupOpened}`}>
        <div className="popup__container">
          <h2 className="popup__heading">{this.props.title}</h2>
          <form className="form" name={this.props.name}>
            { this.props.children === 'edit' && <FieldsetPopupEdit /> }
            { this.props.children === 'create' && <FieldsetPopupCreate /> }
            { this.props.children === 'avatar-update' && <FieldsetPopupAvatarUpdate /> }   
            <button className="form__submit button" type="submit" aria-label={this.props.buttonText}>{this.props.buttonText}</button>
          </form>
        </div>
        <button className="button popup__button-close" type="button" aria-label="Закрыть" onClick={this.props.onClose}></button>
      </div>
    );
  }
}

export default PopupWithForm;
