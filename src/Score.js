import React from 'react';

const Score = ({playerHand, dealerHand}) => {
    if (playerHand){
        var handTotal = playerHand.reduce((total, card) => {
            return total + card.value
        }, 0)
        
        if ((handTotal > dealerHand) && (handTotal <= 21)){
            return(
                <div> Winner: Player </div>
                )
        }else if(handTotal> 21){
            return(
                <div>Bust!</div>
            )
        }
    }   
    
    return null;
    }
    
    export default Score;