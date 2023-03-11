import React from 'react';
import Card from './Card';

function GameBoard() {

    //Create a deck
    const difficulty = 16
    const deck = [] 
    for (let i = 0; i < difficulty; i++) {
        deck.push(<Card key={i} />);
    }

    return(
        <div>
            {deck}
        </div>
    )
}

export default GameBoard;