import React, {Component} from 'react';
import { CardArr } from './CardArr';
import Deck from './Deck';
import Score from './Score.js';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            deck: CardArr,
            playerHand: null,
            dealerHand: null,
        }
    }
    
    // Takes (num) number of cards from deck starting at index (i).
    takeCards = (num) => {
        const deckCopy = this.state.deck.slice();
        const hand = deckCopy.splice(0, num);
        this.setState({deck: deckCopy});
        return hand;
    }           
    
    deal = () => {
        if (!this.state.playerHand){
            
            //Take four cards from deck
            const cardArr = this.takeCards(4); 
    
            //Deal two cards to player
            const playerHand = cardArr.splice(0, 2);
            this.setState({playerHand: playerHand});
            
            //Deal two cars to dealer          
            this.setState({dealerHand: cardArr});
        }else{
            alert('You must hit or stand')
        }
    }
     
    hit = () => {
        //Add card to player's hand
        let hand = this.state.playerHand;
        console.log(hand);
        const card = this.takeCards(1)
        console.log(card)
        console.log(hand)
        this.setState({playerHand: hand.concat(card)}); 
    }  
    
    render(){
        return(
            <div className = 'tc '>
            <input className='ma2 ' onClick={() => this.deal()} type="button" value="Play"></input>
            <input className='ma2 ' onClick={() => this.hit()} type="button" value="Hit"></input>          
            <Score playerHand = {this.state.playerHand} dealerHand = {this.state.dealerHand} />

            <h2>Deck</h2>
            <Deck CardArr = {this.state.deck} />
            </div>
        );
    }        
}
    
    export default Game;

    
    