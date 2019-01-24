import React from 'react';
import Player from './Player';
import Dealer from './Dealer';
import Winner from './Winner';

const Score = ({playerHand, dealerHand})=> {
        if (playerHand){
            var playerSum = playerHand.reduce((total, card) => {
                return total + card.value
            }, 0)

            var dealerSum = dealerHand.reduce((total, card) => {
                return total + card.value
            }, 0)        
            
            return(
                <div>
                <Winner playerTotal = {playerSum} dealerTotal = {dealerSum} />
                <h2>Dealer Hand</h2>
                <Dealer CardArr = {dealerHand} dealerTotal = {dealerSum} />
                <h2>Player Hand</h2>
                <Player CardArr = {playerHand} playerTotal = {playerSum} />
                </div>
            )     
            
        }
        return null;
}
    
    export default Score;