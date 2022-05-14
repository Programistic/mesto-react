import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
  
  return (
    <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      
    </PopupWithForm>
  );
}

export default ConfirmDeletePopup;