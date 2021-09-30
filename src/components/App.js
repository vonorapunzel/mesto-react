import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }
  return (
    <>
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      >
        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          button="Создать"
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        >
          <input
            className="popup__text popup__text_name_input"
            type="text"
            id="name-input"
            name="name"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__span popup__span_text-error"
            id="name-input-error"
          ></span>
          <input
            className="popup__text popup__text_whois_input"
            type="text"
            id="whois-input"
            name="about"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__span popup__span_text-error"
            id="whois-input-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Новое место"
          button="Создать"
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        >
          <input
            className="popup__text popup__text_title_input"
            type="text"
            id="title-input"
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Название"
            required
          />
          <span
            className="popup__span popup__span_text-error"
            id="title-input-error"
          ></span>
          <input
            className="popup__text popup__text_link_input"
            type="url"
            id="link-input"
            name="link"
            minLength="2"
            maxLength="200"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__span popup__span_text-error"
            id="link-input-error"
          ></span>
        </PopupWithForm>
        <PopupWithForm
          name="delete-card"
          title="Вы уверены"
          button="Да"
        ></PopupWithForm>
        <PopupWithForm
          name="profile-image"
          title="Обновить аватар"
          button="Сохранить"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        >
          <input
            className="popup__text popup__text_link_input"
            type="url"
            id="avatar-input"
            name="avatar"
            minLength="2"
            maxLength="200"
            placeholder="Ссылка на картинку"
            required
          />
          <span
            className="popup__span popup__span_text-error"
            id="avatar-input-error"
          ></span>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
