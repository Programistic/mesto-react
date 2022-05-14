function ImagePopup(props) {

  const popupOpened = (JSON.stringify(props.card) !== '{}') ? 'popup_opened' : '';

  return (
    <div className={`popup popup_role_image-display ${popupOpened}`}>
      <img className="popup__image" src={props.card.link} alt={props.card.name}/>
      <p className="popup__image-caption">{props.card.name}</p>
      <button className="button popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
    </div>
  );
}

export default ImagePopup;