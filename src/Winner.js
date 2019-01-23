import React from 'react';

const Winner = ({winner}) => {
        
        if (winner){
            return(
                <div> Winner: {winner}</div>
            );
        }else{
            return null; 
        }
}

export default Winner;