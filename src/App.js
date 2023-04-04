import React from 'react';
import Card from './Card';
import Foundation from './Foundation';
import Tableau from './Tableau';

const App = () => {
  const foundationPiles = [[], [], [], [], [], [], []];
  const tableauCards = [
    [{ value: 'K', suit: '♥️' }, { value: 'Q', suit: '♠️' }, { value: 'J', suit: '♦️' }],
    [{ value: '10', suit: '♣️' }, { value: '9', suit: '♠️' }],
    [{ value: '8', suit: '♠️' }, { value: '7', suit: '♦️' }, { value: '6', suit: '♣️' }],
    [{ value: '5', suit: '♦️' }, { value: '4', suit: '♠️' }, { value: '3', suit: '♥️' }, { value: '2', suit: '♣️' }]
  ]
  const foundationCards = [
    { value: null, suit: null },
    { value: null, suit: null },
    { value: null, suit: null },
    { value: null, suit: null },
    { value: null, suit: null },
    { value: null, suit: null },
    { value: null, suit: null },
  ];
  ;

  return (
    <div>
      <Foundation piles={foundationPiles} />
      <Tableau cards={tableauCards} />
    </div>
  );
};

export default App;
