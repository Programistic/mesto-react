function PopupWithForm(props) {

  const popupOpened = props.isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup popup_role_${props.name} ${popupOpened}`}>
      <div className="popup__container">
        <h2 className="popup__heading">{props.title}</h2>
        <form className="form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button className="form__submit button" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
        </form>
      </div>
      <button className="button popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
    </div>
  );
}

export default PopupWithForm;
