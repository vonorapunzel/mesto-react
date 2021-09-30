import React from "react";
import api from "../utils/Api";
import editProfile from "../images/editprofile.png";
import Card from "./Card";

function Main({
  onCardClick,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  children,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserProfile(), api.getInitialCards()])
      .then((res) => {
        const userProfile = res[0];
        const cards = res[1];
        setUserAvatar(userProfile.avatar);
        setUserDescription(userProfile.about);
        setUserName(userProfile.name);
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container profile__container-avatar">
          <img
            className="profile__avatar"
            onClick={onEditAvatar}
            src={userAvatar}
            alt="аватарка"
          />
          <img
            className="profile__button-avatar"
            src={editProfile}
            alt="аватарка"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__editbutton"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__addbutton"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <article key={card._id} className="element">
            <Card card={card} onCardClick={onCardClick} />
          </article>
        ))}
      </section>
      {children}
    </main>
  );
}

export default Main;
