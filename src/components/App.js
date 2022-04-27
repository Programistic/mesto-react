import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import FieldsetPopupEdit from './FieldsetPopupEdit';
import FieldsetPopupCreate from './FieldsetPopupCreate';
import FieldsetPopupAvatarUpdate from './FieldsetPopupAvatarUpdate';
import ImagePopup from './ImagePopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {}
    };
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  }

  handleEscClick = (event) => {
    if (event.key === 'Escape') {
      this.closeAllPopups();
    }
  }

  handleOutsideClick = (event) => {
    if (event.target.classList.contains('popup')) {
      this.closeAllPopups();
    }
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
  }

  closeAllPopups = () => {
    this.setState(
      {
        isEditProfilePopupOpen: false,
        isAddPlacePopupOpen: false,
        isEditAvatarPopupOpen: false,
        selectedCard: {}
      }
    );
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscClick);
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscClick);
    document.addEventListener("click", this.handleOutsideClick);
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <Header />

          <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />

          <Footer />

          <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}>
            <FieldsetPopupEdit />
          </PopupWithForm>

          <PopupWithForm name="create" title="Новое место" buttonText="Создать" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
            <FieldsetPopupCreate />
          </PopupWithForm>

          <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}>
            <FieldsetPopupAvatarUpdate />
          </PopupWithForm>

          <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" onClose={this.closeAllPopups} />

          <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} />
        </div>
      </div>
    );
  }
  
}

export default App;

