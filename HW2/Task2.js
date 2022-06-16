


function tictac(board){
	let stringBoard = '';
 
  
 		board.map(line => {
    	stringBoard += line.join('');
    }) 		
    
    
    return (
    checkWinner(stringBoard[0], stringBoard[1], stringBoard[2])
    || checkWinner(stringBoard[3], stringBoard[4], stringBoard[5])
    || checkWinner(stringBoard[6], stringBoard[7], stringBoard[8])
    || checkWinner(stringBoard[0], stringBoard[3], stringBoard[6])
    || checkWinner(stringBoard[1], stringBoard[4], stringBoard[7])
    || checkWinner(stringBoard[2], stringBoard[5], stringBoard[8])
    || checkWinner(stringBoard[0], stringBoard[4], stringBoard[8])
    || checkWinner(stringBoard[2], stringBoard[4], stringBoard[6])
    || catGame(stringBoard)
    );
}

function checkWinner(f1, f2, f3){
  let winner = '';
  
  if(f1 != 0){
  	
    if((f1 == f2) && (f1 == f3)){
    		if(f1 == 1){
        	winner = 'X';
          	console.log(winner, ' won!');
          return 1;
        } else if (f1 == 2){
        	winner = 'O';
          	console.log(winner, ' won!');
          return 1;
        }
    }
  } 
  
  
}

function catGame(stringBoard){ //check if all fields are occupied. Will be called after winners was checked
	
  
  for(let i = 0; i < 9; i++){
  	if(stringBoard[i] == 0) {
    	console.log('Game not finished yet!');
    	return -1;
    }    
  }
	console.log('0 - Cat Game!'); 
}


tictac([[1, 1, 2],
				[2, 1, 1],
        [1, 2, 2]]);
        

tictac([[0, 0, 2],
				[1, 2, 1],
        [1, 0, 2]]);

tictac([[1, 0, 0],
				[1, 2, 0],
        [1, 2, 0]]);

