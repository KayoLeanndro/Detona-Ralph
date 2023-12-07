const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelectorAll(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values: {
        timerId: null,
        gameValocity: 1000
    }
};

function ramdomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add("enemy")
}

function moveEnemy(){
    state.values.timerId = setInterval(ramdomSquare, state.values.gameValocity)
}

function addListenerHitBox(){
    state.view.squares.forEach((square) =>{});
}

function init(){
    ramdomSquare();
    moveEnemy();
}

init();