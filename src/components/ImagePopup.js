function ImagePopup(props) {

  const popupOpened = (props.card !== false) ? 'popup_opened' : false;

  return (
    <div className={`popup popup_role_image-display ${popupOpened}`}>
      <img className="popup__image" src={props.card.link} alt={props.card.title}/>
      <p className="popup__image-caption">{props.card.title}</p>
      <button className="button popup__button-close" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
    </div>
  );
}

export default ImagePopup;