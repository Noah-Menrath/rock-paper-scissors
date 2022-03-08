let choices = [
    'rock',
    'paper',
    'scissors'
];







function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please type either Rock, Paper, or Scissors. Click the 'Cancel' button below or type 'cancel' to quit out of this prompt.")
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);


    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock wins! Congratulations!")
    }
    
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper wins! You lose!")
    }

    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Both Chose Rock! Tie Game!")
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors Beat Paper! You Lose!")
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper Beats Rock! Congratulations!")
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Both Chose Paper! Tie Game!")
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock Beats Scissors! You Lose!")
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors Beat Paper! Congratulations!")
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Both Chose Paper! Tie Game")
    }
    
    else {
        console.log("Unexpected Error")
    }

    

    


   
    
};

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound()
        if (playerSelection = "cancel") {
            return
        }
    };
}





game()