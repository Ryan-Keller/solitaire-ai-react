import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {props.value} {props.suit}
    </div>
  );
};

export default Card;
