import React,{useState} from "react";
import Board from "./components/Board";
import Foot from "./components/Foot";

import "./styles/root.scss";
function App(){
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXnext,setisXnext]=useState(false);
  const [player_id,set_player_id]=useState(1);
//const [message,setmessage]=useState("Player "+player_id+"'s turn");
  function handleSquareClick(position){
     // console.log(board[position]);
     if(board[position]==null){
      setBoard((prev)=>{
       return prev.map((square,pos)=>{
           if(pos===position){
               return isXnext? 'X': 'O';
              
           }
           return square;
       });
      });
      setisXnext((prev)=>!prev);
      set_player_id(
        
        (previd)=>{
          console.log(previd);
        if(previd===1)
        {
          return 2;
        }
        else{
          return 1;
        }
        console.log(previd);
      });
      console.log(player_id);
      //setmessage(()=>{return ("Player "+player_id+"'s turn");})
  }
  else{
      return;
  }
  }
  return(
  
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2>Player {player_id}'s turn</h2>
   
    <Board board={board} handleSquareClick={handleSquareClick}/>
   
    <Foot className="footer"/>
    </div>
   
  );
};
export default App;
