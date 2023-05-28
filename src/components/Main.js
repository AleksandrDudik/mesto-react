import React from "react";
import Card from "./Card";
import {api} from "../utils/Api";

function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь');
  const [userAvatar, setUserAvatar] = React.useState('');
  
  React.useEffect(() => {
    api.getApiUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
  }, []);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="Фото профиля" src={userAvatar} />
          <button className="profile__button profile__button_actions_avatar button" type="button" onClick={props.onEditAvatar} ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__profession">{userDescription}</p>
          <button className="profile__button profile__button_actions_edit button" type="button" onClick={props.onEditProfile} ></button>
        </div>
        <button className="profile__button profile__button_actions_add button" type="button" onClick={props.onAddPlace} ></button>
      </section>
      <section className="cards">
        <ul className="card">
          {props.cards.map((card) => {return <Card key={card._id} card={card} onCardClick={card} {...props}/>})}
        </ul>
      </section>
    </main>
  );
}

export default Main;