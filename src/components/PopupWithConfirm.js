import { Component } from 'react'

class PopupWithConfirm extends Component {

  handleConfirmCardDelete = (event) => {
    event.preventDefault();
    
  }
  
  render() {
  
    const popupOpened = this.props.isOpen ? 'popup_opened' : '';
  
    return (
      <div className={`popup popup_role_${this.props.name} ${popupOpened}`}>
        <div className="popup__container">
          <h2 className="popup__heading">{this.props.title}</h2>
          <form className="form" name={this.props.name}>
            <button className="form__submit button" type="submit" aria-label={this.props.buttonText} onClick={this.handleConfirmCardDelete}>{this.props.buttonText}</button>
          </form>
        </div>
        <button className="button popup__button-close" type="button" aria-label="Закрыть" onClick={this.props.onClose}></button>
      </div>
    );
  }
}

export default PopupWithConfirm;