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
            <div className='row'>{deck.slice(0,4)}</div>
            <div className='row'>{deck.slice(4,8)}</div>
            <div className='row'>{deck.slice(8,12)}</div>
            <div className='row'>{deck.slice(12)}</div>
        </div>
    )
}

export default GameBoard;