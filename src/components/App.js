import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import FieldsetPopupEdit from './FieldsetPopupEdit';
import FieldsetPopupCreate from './FieldsetPopupCreate';
import FieldsetPopupAvatarUpdate from './FieldsetPopupAvatarUpdate';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {},
      currentUser: {}
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

    api.getProfile()
      .then((userData) => {
        this.setState( {currentUser: userData} )
      })
      .catch((err) => {
        console.log(err);
      });

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

          <CurrentUserContext.Provider value={this.state.currentUser}>

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

          </CurrentUserContext.Provider>
          
        </div>
      </div>
    );
  }
  
}

export default App;

