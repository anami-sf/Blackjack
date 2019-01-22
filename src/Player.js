import React from 'react';
import Card from './Card';

const Player = ({CardArr}) => {
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
            )
        })

        return (
                <div>
                    {Cards}
                </div>
        ) 
    }
    return null;           
}

export default Player;