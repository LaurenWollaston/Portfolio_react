import React from 'react';
import '../layouts/card.css'

const Card = (props) => {
  return (
    <section className="card">
      <header className="cardHeader">
        <h2>{props.header}</h2>
      </header>
      <div className="cardBody">
        <img className="cardImage" src={props.imageref} alt={props.header} />
        <div className="cardContent">{props.cardBody}</div>
      </div>
    </section>
  );
};

export default Card;