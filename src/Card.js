import React from 'react';

const Card = ({number, suit, value, image}) => {
    return(
        <div className = 'ma2 grow'> 
            <p>suit: {suit}, number: {number}, value: {value}</p>
            <img src={process.env.PUBLIC_URL + image} alt="Error" width="80"></img>
        </div>
    );
}

export default Card;


/*<img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>*/