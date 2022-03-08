let choices = [
    'rock',
    'paper',
    'scissors'
];


function computerPlay() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
};




function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock") {
        console.log("Tie Game!")
    }

    else {
        console.log("Undecided!")
    }
   
};

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));