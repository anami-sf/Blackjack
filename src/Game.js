import React, {Component} from 'react';
import { CardArr } from './CardArr';
import Deck from './Deck';
//import Player from './Player';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            deck: CardArr,
            player: null,
            dealer: [],
        }
    }

<<<<<<< HEAD

=======
>>>>>>> playerComponent
    handleClick = () => {
        
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop();
        console.log(topCard)
        this.setState({deck: deckCopy});
        console.log(deckCopy);
<<<<<<< HEAD
        /* 
        let playerHand = this.state.player.slice();
        playerHand = playerHand.push(topCard);
        this.setState({player: playerHand});
        console.log(playerHand); */
=======

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
>>>>>>> playerComponent
    }
    
    
    render(){
        return(
            <div>
                {console.log(this.state.deck)}
                {console.log(this.state.player)}
                <input onClick={() => this.handleClick()} type="button" value="Deal"></input>
                <p>Player Hand</p>
                <p>Deck</p>
                <Deck CardArr = {this.state.deck} />
            </div>
            //<Player CardArr = {this.state.player} />
        );
    }

}
    
    export default Game;

   