import React from 'react';


function Square({value,onClick,iswinningsquare}){
    
    return (
        <button type="button" className={`square ${iswinningsquare?'winning':''}`} onClick={onClick} >
            <div className={value==='X'? 'text-green':'text-orange'}>
            {
            value
            }
            </div>
            </button>
    );
   
};

export default Square;
