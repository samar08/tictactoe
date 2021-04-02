import React,{useState} from "react";
import { useAlert } from "react-alert";
import Board from "./components/Board";
import Foot from "./components/Foot";
import calculateWinner from "./Calculate winner function";
import "./styles/root.scss";
//const alert=useAlert()

function App(){
  function isdraw(board,winner){
    var count=0;
    board.forEach(element => {
      if(element==null){
        count+=1;
      }
    });
    if(count==0 && winner==null){
      return true;
    }
    else{
      return false;
    }
    
    }
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXnext,setisXnext]=useState(false);
  const [player_id,set_player_id]=useState('O');
 
  const {winner,winningsquares}=calculateWinner(board);
 var message=(winner?("Player "+winner+" won the match"): (isXnext? ("Player X's turn"):("Player O's turn")));
 if(isdraw(board,winner)){
   message="DRAW MATCH";
 }
 function new_game(){
   setBoard(
     Array(9).fill(null)
   );
   setisXnext(false);
   
   
 }
 console.log(board,setisXnext);
  function handleSquareClick(position){
     // console.log(board[position]);
     if(board[position]==null && winner==null){
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
          //console.log(previd);
        if(previd==='O')
        {
          return 'X';
        }
        else{
          return 'O';
        }
        console.log(previd);
      });
      //console.log(player_id);
    
  }
  else{
      return;
  }
  }
  
  return(
  
  <div className="app">
    <h1>TIC TAC TOE</h1>
    <h2 className={winner?((winner==='X')?'text-green':'text-orange'):('text-yellow')} >
      
      {message}
      
      </h2>
    
  
    <Board board={board} handleSquareClick={handleSquareClick} winningsquares={winningsquares}/>
   <button className={`btn-reset ${winner?'active':''}`} onClick={new_game}>Start New Game</button>
    <Foot className="footer"/>
    <div className="bg-balls"/>
    </div>
   
  );
};
export default App;
