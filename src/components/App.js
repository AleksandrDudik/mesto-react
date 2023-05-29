import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

export default App;

function App() {

  const [isEditProfilePopupOpen, setProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarOpen] = React.useState(false);
  const [selectedCard, openCard] = React.useState(null);
  const [isImageOpen, setImageOpen] = React.useState(false);
  const [isPopupClosed, setClosed] = React.useState(true);

  function handleCardClick(card) {
    setImageOpen(true);
    openCard(card);
  }
  
  function handleEditAvatarClick() {
    setAvatarOpen(true);
    setClosed(false);
  }
    
  function handleEditProfileClick() {
    setProfileOpen(true);
    setClosed(false);
  }

    
  function handleAddPlaceClick() { 
    setAddOpen(true);
    setClosed(false);
  }
 
  function closeAllPopups() {
    setClosed(true);
    setAvatarOpen(false);
    setProfileOpen(false);
    setAddOpen(false);
    setImageOpen(false);
  }

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard;

  React.useEffect(() => {
    function handleCloseByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    if(isOpen) {
      document.addEventListener('keydown', handleCloseByEscape);
      return () => {
        document.removeEventListener('keydown', handleCloseByEscape);
      }
    }
  }, [isOpen]);

  React.useEffect(()=> {
    const handleCloseByOverlay = (evt) => {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    };
    document.addEventListener('mousedown', handleCloseByOverlay);
    return () => document.removeEventListener('mousedown', handleCloseByOverlay);
  });


  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImageOpen} />
      <PopupWithForm name="form-confirm" title="Вы уверены?" buttonText="Да" />
      <PopupWithForm name="form-info" isOpen={isAddPlacePopupOpen} isClosed={isPopupClosed} onClose={closeAllPopups} title="Новое место" buttonText="Создать">
        <label className="popup__field">
          <input type="text" id="city" name="city" minLength="2" maxLength="30" placeholder="Название"className="popup__input popup__input_type_city" required autoComplete="off" />
          <span className="popup__error city-error">Ошибка</span>
        </label>
        <label className="popup__field">
          <input type="url" id="link" name="link" placeholder="Ссылка на картинку" className="popup__input  popup__input_type_link" required autoComplete="off" />
          <span className="popup__error link-error">Ошибка</span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="popupformprofile" isOpen={isEditProfilePopupOpen} isClosed={isPopupClosed} onClose={closeAllPopups} title="Редактировать профиль" buttonText="Сохранить">
        <label className="popup__field">
          <input type="text" id="name" name="name" maxLength="40" minLength="2" placeholder="Имя" className="popup__input popup__input_type_name" required autoComplete="off" />
          <span className="popup__error name-error">Ошибка</span>
        </label>
        <label className="popup__field">
          <input type="text" id="about" name="about" maxLength="200" minLength="2" placeholder="Профессия" className="popup__input popup__input_type_job" required autoComplete="off" />
          <span className="popup__error about-error">Ошибка</span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="popupformavatar" isOpen={isEditAvatarPopupOpen} isClosed={isPopupClosed} onClose={closeAllPopups} title="Обновить аватар" buttonText="Сохранить">
        <label className="popup__field">
          <input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar" required autoComplete="off" />
          <span className="popup__error avatar-error">Ошибка</span>
        </label>
      </PopupWithForm>
    </div>  
  );
}