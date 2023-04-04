import React from 'react';
import Card from './Card';

const Foundation = (props) => {
  return (
    <div className="foundation-pile">
      {props.cards.map((card, index) => (
        <div className="foundation-slot" key={index}>
          {card ? <Card value={card.value} suit={card.suit} /> : null}
        </div>
      ))}
    </div>
  );
};

export default Foundation;
