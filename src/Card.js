import React from 'react';

const Card = ({number, suit, value, image}) => {
    return(
        <div className = 'tc bg-gray dib br3 pa1 ma2 grow'> 
            <img src={process.env.PUBLIC_URL + image} alt="Error" width="80"></img>
            <p>number: {number}</p>
            <p>value: {value} </p>
        </div>
    );
}

export default Card;


/*<img src={`https://robohash.org/${id}?200x200`} alt="robots"></img>*/