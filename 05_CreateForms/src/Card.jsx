import React from "react";

function Card({ title, content }) {
  return (
    <div>
      <div className="card-2">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
