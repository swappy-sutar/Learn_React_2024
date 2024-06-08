import React from "react";
import "./Card.css";

function Card(card) {
  return (
    <div>
      <div className="card-2">
        <h3>{card.title}</h3>
        <p>{card.content} </p>
      </div>
    </div>
  );
}

export default Card;
