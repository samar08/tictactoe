import React from 'react';


function Square({value,onClick,iswinningsquare}){
    
    return (
        <button type="button" className="square"  onClick={onClick} style={{fontWeight: iswinningsquare?'bold':'normal'}}>
            <div className={value==='X'? 'text-green':'text-orange'}>
            {
            value
            }
            </div>
            </button>
    );
   
};

export default Square;
