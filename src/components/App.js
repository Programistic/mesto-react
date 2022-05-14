import { Component } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import PopupWithConfirm from './PopupWithConfirm';

import FieldsetPopupCreate from './FieldsetPopupCreate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      isConfirmPopupOpen: false,
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

  handleConfirmDeleteCardClick = () => {
    this.setState({ isConfirmPopupOpen: true });
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

  handleUpdateUser = (userName, userDescription) => {
    api.setUserInfo(userName, userDescription)
      .then(userData => {
        this.setState({currentUser: userData});
        this.closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleUpdateAvatar = (userAvatar) => {
    api.setAvatar(userAvatar)
      .then(userData => {
        this.setState({currentUser: userData});
        this.closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    api.getUserInfo()
      .then(userData => {
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

  closeAllPopups = () => {
    this.setState(
      {
        isEditProfilePopupOpen: false,
        isAddPlacePopupOpen: false,
        isEditAvatarPopupOpen: false,
        isConfirmPopupOpen: false,
        selectedCard: {}
      }
    );
  }

  render() {
    return (
      <div className="page">
        <div className="container">

          <CurrentUserContext.Provider value={this.state.currentUser}>

            <Header />

            <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick} />

            <Footer />

            <EditProfilePopup isOpen={this.state.isEditProfilePopupOpen} onUpdateUser={this.handleUpdateUser} onClose={this.closeAllPopups} />

            <EditAvatarPopup isOpen={this.state.isEditAvatarPopupOpen} onUpdateAvatar={this.handleUpdateAvatar} onClose={this.closeAllPopups} />

            <PopupWithForm name="create" title="Новое место" buttonText="Создать" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
              <FieldsetPopupCreate />
            </PopupWithForm>

            <PopupWithConfirm name="confirm" title="Вы уверены?" buttonText="Да" isOpen={this.state.isConfirmPopupOpen} onClose={this.closeAllPopups} />

            <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} />

          </CurrentUserContext.Provider>
          
        </div>
      </div>
    );
  }
  
}

export default App;

