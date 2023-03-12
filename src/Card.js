import React from 'react';
import { useState } from 'react';


function Card() {
    const [isFlipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!isFlipped);
    };
    
    return (
        <div className='card-slot' onClick={flipCard}>
            <div className={isFlipped? 'card flipped-card' : 'card'}>
                <div className='card-logo'>
                    <span className='fa-solid fa-sun' />
                </div>
                <div className='card-face'>
                    <span className="fa-solid fa-umbrella-beach" />
                </div>
            </div>
        </div>
    )
}

export default Card;