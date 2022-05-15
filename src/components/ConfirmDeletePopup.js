import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onConfirmDeleteCard();
  }
  
  return (
    <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} />
  );
}

export default ConfirmDeletePopup;