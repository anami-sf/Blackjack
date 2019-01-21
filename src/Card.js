import React from 'react';

const Card = ({number, suit}) => {
    return(
        <div className = 'tc ba bw2 pa2 mw4 ma2 grow'> 
            <p>{number}</p>
            <p>of</p>
            <p>{suit}</p>
        </div>
    );
}

export default Card;