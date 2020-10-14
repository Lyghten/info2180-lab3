document.addEventListener('DOMContentLoaded', () => {
    var squares = document.getElementById("board").querySelectorAll("div");
    for (var i = 0; i < squares.length; i++) {
        squares[i].className = "square";
    }
    allListener(squares);
    squareId(squares);
    reset(squares);
});



function makeListener(box) {
    box.addEventListener("mouseover", function() {
        box.classList.add("hover");
    });

    box.addEventListener("mouseout", function() {
        box.classList.remove("hover");
    });

    box.addEventListener("click", function() {
        if (usedBox[parseInt(box.id) - 1] == false) {
            if (chosen % 2 == 0) {
                box.classList.add("X");
                box.textContent = "X";
                state[0].push(box.id);
            } else {
                box.classList.add("O");
                box.textContent = "O";
                state[1].push(box.id);
            }
            usedBox[parseInt(box.id) - 1] = true;
            console.log(usedBox);
            chosen++;
            displayWinner();
        }
    });
}


function allListener(array) {
    array.forEach(makeListener);
}


function possiblewinner() {
    var anywins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    const positions = this.positions;
    winningCombinations.forEach((winningCombo) => {
        const pos0InnerText = positions[winningCombo[0]].innerText;
        const pos1InnerText = positions[winningCombo[1]].innerText;
        const pos2InnerText = positions[winningCombo[2]].innerText;
        const isWinningCombo = pos0InnerText !== '' &&
            pos0InnerText === pos1InnerText && pos1InnerText === pos2InnerText;
        if (isWinningCombo) {
            winner = true;
            winningCombo.forEach((index) => {
                positions[index].className += ' winner';
            })
        }
    });

    return winner;
}


function  outcome(winner)  {    
    var  statusbar  =  document.getElementById("status");    
    if  (winner  !=  "draw")  {        
        stop();        
        statusbar.classList.add("you-won");        
        statusbar.textContent  =  `Congratulations! ${winner} is the Winner!`;    
    } 
    else  {        
        statusbar.textContent  =  "It's was a draw."; 
    }
}

//display to see the who's the winner

function  displayWinner()  {    
    var  winner  =  anyWinner();    
    if  (chosen  ==  9  &&  winner  ==  "There's no winner")  {         outcome("It's a draw");

             } 
    else  if  (chosen  >=  5  &&  winner  !=  "There's no winner")  {         outcome(winner);     }
}


function  squareId(array)  {    
    for  (var  i  =  0;  i  <  array.length;  i++)  
    {         array[i].id  =  `${i+1}`;     }
}


// CODE FOR RESTARTING THE GAME
function  reset(array)  {    
    var  button  =  document.querySelector("button");    
    button.addEventListener("click",  function()  {        
        usedBox  =   [false,  false,  false,  false,  false,  false,  false,  false,  false];        
        state  =   [            
            ["X"],             
            ["O"]        
        ];        
        chosen  =  0;        
        var  statusDiv  =  document.getElementById("status");        
        statusDiv.classList.remove("you-won");        
        statusDiv.textContent  =  "Move your mouse over a square and click to play an X or an O";        
        for  (var  i  =  0;  i  <  array.length;  i++)  {            
            var  box  =  array[i];            
            if  (box.textContent  ==  "X")  {                
                box.textContent  =  " ";                
                box.classList.remove("X");            
            } 
            else  if  (box.textContent  ==  "O")  {                
                box.textContent  =  " ";                
                box.classList.remove("O");            
            }        
        }    
    })
}
//CODE FOR DISALLOWING CHEATING

function   stop()   {        
    for   (var i = 0;  i < usedBox.length; i++) {         
        if  (usedBox[i] == false) {             
            usedBox[i]   =   true;         
        }     
    }
}




var state = [
    ["X"],
    ["0"]
];
var chosen = 0;
var usedBox = [false, false, false, false, false, false, false, false, false];