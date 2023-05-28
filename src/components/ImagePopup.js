import React from "react";

function ImagePopup(props) {

  return (
    <article className={`popup popup_photo_card ${props.isImageOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container-card">
        <button className="popup__close popup__close_photo" type="button" onClick={props.onClose}></button>
        <img className="popup__zoom-card" alt={props.card ? props.card.city : ''} src={props.card ? props.card.link : '#'}/>
        <h3 className="popup__pic-title">{props.card ? props.card.city : ''}</h3>
      </div>
    </article>
  );
}

export default ImagePopup;