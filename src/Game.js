import React, {Component} from 'react';
import CardArr from './CardArr';
import Deck from './Deck';

class Game extends Component {

    render(){
        return(
            <Deck CardArr = {CardArr} />
        );
    }
    
}

export default Game;