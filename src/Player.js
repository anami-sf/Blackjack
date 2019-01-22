import React, { Component } from 'react';
import Card from './Card';
//import PlayerHand from './PlayerHand';

class Player extends Component{
    constructor({CardArr}){
        super({CardArr})
        this.state = {
            score: 0 
        }
    }

    render(){
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
}

export default Player;
