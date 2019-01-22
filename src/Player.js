import React from 'react';
import Card from './Card';

const Player = ({CardArr}) => {
    if (CardArr) {
        let score =0
        const Cards = CardArr.map(card => {
            return(
                    score =  score + card.value,
                    <Card 
                        number = {card.number} 
                        suit = {card.suit} 
                        value = {card.value} 
                        image = {card.img}
                        key ={`${card.number}{${card.suit}`}
                      />
            )
        })

        return (
                <div>
                    <p>Player Hand Total: {score}</p>
                    {Cards}
                </div>
        ) 
    }
    return null;           
}

export default Player;
