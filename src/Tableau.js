import React from 'react';
import Card from './Card';
import './Tableau.css';

const Tableau = (props) => {
  return (
    <div className="tableau">
      {props.cards.map((card, index) => (
        <div className="tableau-pile" key={index}>
          <div className="tableau-slot">
            {card ? <Card value={card.value} suit={card.suit} /> : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tableau;
