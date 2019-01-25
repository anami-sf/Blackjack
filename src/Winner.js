import React from 'react';

const Winner = ({playerTotal, dealerTotal}) => {
    if(playerTotal && playerTotal > dealerTotal && playerTotal <= 21){
    
    return(
        <div> <h1>Winner: Player</h1></div>
    )
    }else if((playerTotal && playerTotal < dealerTotal && dealerTotal <= 21)){
        return(
            <div> <h1>Winner: Dealer </h1></div>
        )
    }

    return null;
}

export default Winner;