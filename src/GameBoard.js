import React from 'react';
import Card from './Card';
import { animalDeck } from './deckLibrary.js';
import { useState } from 'react';

function GameBoard() {
    const difficulty = 16
    const [cardsFlipped, setcardsFlipped] = useState([]);//cardsFlipped (array of indexes of cards that are flipped)
    const [clickCounter, setclickCounter] = useState(0); //clickCounter (an int)

    //Grab a deck from the library
    const deckLogo = animalDeck.logo
    const sortedDeckFaces = fyShuffle(animalDeck.faces).slice(0,difficulty/2)
    const deckFaces = fyShuffle(sortedDeckFaces.concat(sortedDeckFaces))

    //Create a React deck
    const deck = deckFaces.map((f, i) => <Card key={i} logo={deckLogo} face={f} />)

    return(
        <div>
            <div className='row'>{deck.slice(0,4)}</div>
            <div className='row'>{deck.slice(4,8)}</div>
            <div className='row'>{deck.slice(8,12)}</div>
            <div className='row'>{deck.slice(12)}</div>
        </div>
    )
}

function fyShuffle(arr) {
    let j, temp
    let shuffledArray = arr

    for (let i=arr.length-1; i>0; i--) { //For every i from array.length-1 until 1,
        j = Math.floor(Math.random()*i) //Pick a number between 0 and i-1, and
        temp = shuffledArray[j]
        shuffledArray[j] = shuffledArray[i]
        shuffledArray[i] = temp //Swap the i-th and the j-th elements.
    }

    return shuffledArray;
}

export default GameBoard;