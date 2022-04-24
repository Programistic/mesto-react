import '../index.css';
import profileAvatar from '../images/Kusto.jpg';

function Main(props) {
  return (
    <div>
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар"/>
        <div className="profile__edit-icon" onClick={props.onEditAvatar}></div>    
        <div className="profile__inner-container">
          <h1 className="profile__user-name">Жак-Ив Кусто</h1>
          <button className="button profile__button-edit" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
        </div>
        <p className="profile__user-info">Исследователь океана</p>
        <button className="button profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button> 
      </section>

      <section className="card-repository">
        <ul className="cards">

        </ul>
      </section>
    </div>
  );

}

export default Main;