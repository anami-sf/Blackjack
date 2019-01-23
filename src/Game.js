import React, {Component} from 'react';
import { CardArr } from './CardArr';
import Deck from './Deck';
import Player from './Player';
import { Dealer } from './Dealer';
//import Winner from './Winner.js';
import Score from './Score.js';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            deck: CardArr,
            playerHand: [],
            dealerHand: null,
        }
    }

    takeCard = () => {
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.shift();
        this.setState({deck: deckCopy});
        return topCard;
    }
    
    hit = () => {
        //Add card to player's hand
        let hand = this.state.playerHand
        hand.push(this.takeCard());
        this.setState({playerHand: hand}); 
    }
    
    deal = () => {
        
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop();
        //console.log(topCard)
        this.setState({deck: deckCopy});
        //console.log(deckCopy);
        
        if (!this.state.dealer) {
            let dealerHand = [];
            dealerHand.push(topCard);
            this.setState({dealer: dealerHand}); 
            //console.log('dealerHand' + dealerHand)
        } else {
            var hand = this.state.dealer
            hand.push(topCard);
            this.setState({dealer: hand}); 
            //console.log('hand' + hand)
        }
    }
    
    //<Winner winner = {this.state.winner} PlayerHandTotal = {this.state.PlayerHandTotal}/>
    render(){
        return(
            <div className = 'tc '>
            <input className='ma4 ' onClick={() => this.deal()} type="button" value="Deal"></input>
            <input onClick={() => this.hit()} type="button" value="Hit"></input>
            
            <Score playerHand = {this.state.playerHand} />
            <h2>Dealer Hand</h2>
            <Dealer CardArr = {this.state.dealer} />
            <h2>Player Hand</h2>
            <Player CardArr = {this.state.playerHand} />
            <h2>Deck</h2>
            <Deck CardArr = {this.state.deck} />
            </div>
            );
        }
        
    }
    
    export default Game;
    
    