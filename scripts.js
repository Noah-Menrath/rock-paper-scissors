let choices = [
    'rock',
    'paper',
    'scissors'
];







function playRound(playerSelection, computerSelection) {
    playerSelection = "rock";
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);

    if (computerSelection == playerSelection) {
        console.log("Tie Game!")
    }

    else {
        console.log("Undecided!")
    }
    
   
    
};





playRound()