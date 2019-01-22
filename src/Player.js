import React from 'react';
import Card from './Card';

const Player = ({CardArr}) => {
    if (!CardArr){
        return null;
    } else {
       /*  const Score = CardArr.reduce((acc, card) => {
            return (acc + card.value);
        }, 0); */
        let Score = 0
        const Cards = CardArr.map(card => {
            return (    
                    <Card 
                        number = {card.number} 
                        suit = {card.suit} 
                        value = {card.value} 
                        image = {card.img}
                        key = {`${card.number}{${card.suit}`}
                      />
            )
        })

        return (
                <div>
                    <p>Player Hand Total: {Score} </p>
                    {Cards}
                </div>
        ) 
    }     
}

export default Player;