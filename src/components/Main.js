import React from 'react';
import api from '../utils/Api';
import editProfile from '../images/editprofile.png';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserProfile()
      .then((res) => {
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
        setUserName(res.name);
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
    
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
  }, []);

  return(
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__container profile__container-avatar">
            <img className="profile__avatar" src={userAvatar} alt="аватарка" />
            <img className="profile__button-avatar" onClick={props.onEditAvatar} src={editProfile} alt="аватарка" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__editbutton" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button className="profile__addbutton" type="button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <article key={card._id} className="element">
              <Card card={card} onCardClick={props.onCardClick} />
            </article>
          ))}
        </section>
          {props.children}
        </main>
    </>
  )
}

export default Main