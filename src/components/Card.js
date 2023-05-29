import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
    
  return (
    <li className="card__template">
      <button className="card__delete" type="button"></button>
      <img className="card__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
      <div className="card__container">
        <h2 className="card__city">{props.card.name}</h2>
        <div className="card__like_container">
          <button className="card__like" type="button"></button>
          <span className="card__like_count">{props.card.likes.length}</span>
        </div>
      </div>  
    </li>
  );
}

export default Card;