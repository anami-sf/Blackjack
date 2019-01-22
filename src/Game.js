import React, {Component} from 'react';
import { CardArr } from './CardArr';
import Deck from './Deck';
import Player from './Player';

class Game extends Component {
    constructor(){
        super()
        this.state = {
            deck: CardArr,
            player: [{
                number: 21, 
                suit: 'A', 
                value: 21, 
                key: `1A`,
                img: '/CardImages/2H.jpg',
            }],
            dealer: [],
        }
    }

/*
    componentDidMount(){
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop();
        this.setState({deck: deckCopy});
        let playerHand = this.state.deck.slice();
        playerHand = playerHand.unshift(topCard);
        this.setState({player: playerHand});
        this.setState({playear: playerHand})
    }
*/

    handleClick = () => {
        
        let deckCopy = this.state.deck.slice();
        let topCard = deckCopy.pop();
        console.log(topCard)
        this.setState({deck: deckCopy});
        let playerHand = this.state.player.slice();
        playerHand = playerHand.push(topCard);
        this.setState({player: playerHand});
        console.log(deckCopy);
        console.log(playerHand);
    }
    
    
    render(){
        return(
            <div>
                {console.log(this.state.deck)}
                {console.log(this.state.player)}
                <input onClick={() => this.handleClick()} type="button" value="Deal"></input>
                <p>Player Hand</p>
                <Player CardArr = {this.state.player} />
                <p>Deck</p>
                <Deck CardArr = {this.state.deck} />
            </div>
        );
    }
}
    
    export default Game;

   