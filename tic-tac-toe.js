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