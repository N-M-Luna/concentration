import React from 'react';
import { useState } from 'react';


function Card({logo, face}) {
    const [isFlipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div className='card-slot' onClick={flipCard}>
            <div className={isFlipped? 'card flipped-card' : 'card'}>
                <div className='card-logo'>
                    <span className={logo} />
                </div>
                <div className='card-face'>
                    <span className={face} />
                </div>
            </div>
        </div>
    )
}

export default Card;