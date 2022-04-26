import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: false,
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

  closeAllPopups = () => {
    this.setState(
      {
        isEditProfilePopupOpen: false,
        isAddPlacePopupOpen: false,
        isEditAvatarPopupOpen: false,
        selectedCard: false,
      }
    );
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />
          <Footer />
          <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" children="edit" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name="create" title="Новое место" buttonText="Создать" children="create" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name="avatar-update" title="Обновить аватар" buttonText="Сохранить" children="avatar-update" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups} />
          <PopupWithForm name="confirm" title="Вы уверены?" buttonText="Да" onClose={this.closeAllPopups} />
          <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} />
        </div>
      </div>
    );
  }
  
}

export default App;

