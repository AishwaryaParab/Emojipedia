import React from "react";

function Card(props) {
  return (
    <div className="card">
      <span className="emoji">{props.emoji}</span>
      <h3 className="name">{props.name}</h3>
      <p className="meaning">{props.meaning}</p>
    </div>
  );
}

export default Card;
