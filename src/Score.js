import React from 'react';

const Score = ({playerHand}) => {
    if (playerHand){
        var handTotal = playerHand.reduce((total, card) => {
            return total + card.value
        }, 0)
        
        if (handTotal >= 10){
            return(
                <div> Winner: Player </div>
                )
        }
    }   
    
    return null;
    }
    
    export default Score;