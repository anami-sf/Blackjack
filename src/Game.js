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
    
    score = (cardArr) => {
        if (cardArr) {          
            const handTotal = cardArr.reduce((score, card) => {
                return score + card.value
            }, 0);
            
            return (handTotal);
        } else {
            return 0; 
        }          
    }
    
    
    
    updatePlayerHand = (hand) => {
        return this.setState({playerHand: hand});
    }
    
    setDeck = (arr) => {
        return this.setState({deck: arr});
    }
    
    winner = () => {
        if (this.state.winner >= 10){
            this.setState({winner: 'Player'});
        }
    }
    
    hit = () => {
        //take one card from deck 
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop(1);
        this.setDeck(deckCopy);
        //Add card to player's hand
        let hand = this.state.playerHand
        hand.push(topCard);
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
    
    