import React from 'react';
import Card from './Card';

const Deck = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className="deck" onClick={handleClick}>
      {props.cards.length > 0 ? <Card /> : null}
    </div>
  );
};

export default Deck;
