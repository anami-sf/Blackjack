import React, {Component} from 'react';
import { CardArr } from './CardArr';
import Deck from './Deck';
import Player from './Player';
import Dealer from './Dealer';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            deck: CardArr,
            player: null,
            dealer: null,
        }
    }

    deal = () => {
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop(1);
        console.log(topCard)
        this.setState({deck: deckCopy});
        console.log(deckCopy);

        if (!this.state.dealer) {
            let dealerHand = [];
            dealerHand.push(topCard);
            this.setState({dealer: dealerHand}); 
            console.log('dealerHand' + dealerHand)
        } else {
            var hand = this.state.dealer
            hand.push(topCard);
            this.setState({dealer: hand}); 
            console.log('hand' + hand)
        }
    }

    handleClick = () => {
        
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop();
        console.log(topCard)
        this.setState({deck: deckCopy});
        console.log(deckCopy);

        if (!this.state.player) {
            let playerHand = [];
            playerHand.push(topCard);
            this.setState({player: playerHand}); 
            console.log('playerHand' + playerHand)
        } else {
            var hand = this.state.player
            hand.push(topCard);
            this.setState({player: hand}); 
            console.log('hand' + hand)
        }
    }
    
    
    render(){
        return(
            <div className = 'tc '>
                {console.log(this.state.deck)}
                {console.log(this.state.player)}
                <input className='ma4 ' onClick={() => this.deal()} type="button" value="Deal"></input>
                <input onClick={() => this.handleClick()} type="button" value="Hit"></input>
                <h2>Dealer Hand</h2>
                <Dealer CardArr = {this.state.dealer} />
                <h2>Player Hand</h2>
                <Player CardArr = {this.state.player} />
                <h2>Deck</h2>
                <Deck CardArr = {this.state.deck} />
            </div>
        );
    }

}
    
    export default Game;

   