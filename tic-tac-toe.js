const tictactoe = new TicTacToe();
tictactoe.start()

function TicTacToe(){
    const board = new Board();
    const playerX = new PlayerX(board);
    const playerO = new PlayerO(board);
    let turn = 0;
    
    
    this.start = function(){
        const config = {childList: true};
        const observer = new MutationObserver(() => takeTurn());
        board.position.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    function takeTurn(){
        if (board.chechForWinner()){
            return;
        }
        
        if (turn % 2 === 0){
            playerX.takeTurn();
        } else {
            playerO.takeTurn();
        }
        
        turn++;
    }   
}



function Board (){
    this.positions = Array.from (document.querySelectorAll('.col'));
    
    this.checkForWinner = function(){
        
        
    }
    
}


function PlayerX (board){
    this.takeTurn = function(){
        board.positions.forEach(el => el.addEventListener('click', handleTurnTaken));
        
    }
    
    function handleTurnTaken(event){
        event.target.innerHTML = 'X';
        board.positions.forEach(el => el.removeEventListener('click', handleTurnTaken));
    }
    
}


function PlayerO(board){
    this.takeTurn = function(){
        const availablePositions = board.positions.fiter((r) =>r.innerHTML === '');
        const move = Math.floor(Math.random() * availablePositions.length);
        availablePositions[move]. innerHTML = 'O';
        
    }


}
















































