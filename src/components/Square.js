import React from 'react';


function Square({value,onClick,iswinningsquare}){
    
    return (
        <button type="button" className="square" onClick={onClick} style={{fontWeight: iswinningsquare?'bold':'normal'}}>{value}</button>
    );
   
};

export default Square;
