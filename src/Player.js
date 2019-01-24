import React from 'react';
import Card from './Card';

const Player = ({CardArr, playerTotal}) => {
    if (CardArr) {

        const Cards = CardArr.map(card => {

            return(
                    <Card 
                        number = {card.number} 
                        suit = {card.suit} 
                        value = {card.value} 
                        image = {card.img}
                        key ={`${card.number}{${card.suit}`}
                      />
            );
        })

        return (
            <div>
                <h2> Player Total: {playerTotal} </h2>
                {Cards}
            </div>
        ); 
    }
    return null;           
}

export default Player;
