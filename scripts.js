let choices = [
    'rock',
    'paper',
    'scissors'
];



/* linking buttons from html to JS */
const rock = document.querySelector('#btn1');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');

let linkPlayerSelection = document.querySelector('#htmlPlayerSelection');
let linkComputerSelection = document.querySelector('#htmlComputerSelection');

let linkPlayerScore = document.querySelector('#playerScore');
let linkComputerScore = document.querySelector('#computerScore');
actualPlayerScore = 1;
actualComputerScore = 1;

let linkWinnerResults = document.querySelector('#winnerResults');


let linkBtnReset = document.querySelector('#btnReset');



/* if player chose rock */
function rockChoice() {

    /* computer randomly chooses either rock, paper, or scissors */
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`You picked Rock.`);
    console.log(`The computer picked ${computerSelection}.`)

    
    if (computerSelection == "scissors") {
        console.log("Rock wins! Congratulations!");
        linkPlayerSelection.textContent = "You Chose Rock!";
        linkComputerSelection.textContent="The Computer Chose Scissors!"
        linkPlayerScore.textContent=(`Player: ${actualPlayerScore++} `);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }
    else if (computerSelection == "paper") {
        console.log("Paper wins! You Lose!");
        linkPlayerSelection.textContent = "You Chose Rock!";
        linkComputerSelection.textContent="The Computer Chose Paper!"
        linkComputerScore.textContent=(` Computer: ${actualComputerScore++}`);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }

    else if (computerSelection == "rock") {
        console.log("Both Chose Rock! Tie Game!");
        linkPlayerSelection.textContent = "You Chose Rock!";
        linkComputerSelection.textContent="The Computer Chose Rock!"
    }

    else {
        console.log("Unexpected Error");
    }
};

/* if player chose paper */
function paperChoice() {

     /* computer randomly chooses either rock, paper, or scissors */
     computerSelection = choices[Math.floor(Math.random() * choices.length)];
     console.log(`You picked Paper!`);
     console.log(`The computer picked ${computerSelection}.`);


    if (computerSelection == "scissors") {
        console.log("Scissors Beat Paper! You Lose!");
        linkPlayerSelection.textContent = "You Chose Paper!";
        linkComputerSelection.textContent="The Computer Chose Scissors!"
        linkComputerScore.textContent=(` Computer: ${actualComputerScore++} `);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }

    else if (computerSelection == "rock") {
        console.log("Paper Beats Rock! Congratulations!");
        linkPlayerSelection.textContent = "You Chose Paper!";
        linkComputerSelection.textContent="The Computer Chose Rock!"
        linkPlayerScore.textContent=(`Player: ${actualPlayerScore++} `);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }

    else if (computerSelection == "paper") {
        console.log("Both Chose Paper! Tie Game!");
        linkPlayerSelection.textContent = "You Chose Paper!";
        linkComputerSelection.textContent="The Computer Chose Paper!"
    }

    else {
        console.log("Unexpected Error");
    }

};

/* if player chose scissors */
function scissorsChoice() {

     /* computer randomly chooses either rock, paper, or scissors */
     computerSelection = choices[Math.floor(Math.random() * choices.length)];
     console.log(`You picked Scissors!`);
     console.log(`The computer picked ${computerSelection}.`);


    if (computerSelection == "rock") {
        console.log("Rock Beats Scissors! You Lose!");
        linkPlayerSelection.textContent = "You Chose Scissors!";
        linkComputerSelection.textContent="The Computer Chose Rock!";
        linkComputerScore.textContent=(` Computer: ${actualComputerScore++} `);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }

    else if (computerSelection == "paper") {
        console.log("Scissors Beat Paper! Congratulations!");
        linkPlayerSelection.textContent = "You Chose Scissors!";
        linkComputerSelection.textContent="The Computer Chose Paper!"
        linkPlayerScore.textContent=(`Player: ${actualPlayerScore++} `);
        if (actualPlayerScore == 6) {
            linkWinnerResults.textContent=("Player Wins!");
        }
        else if (actualComputerScore == 6) {
            linkWinnerResults.textContent=("Computer Wins!");
        } else {
            console.log("unexpected?");
        }
        
    }

    else if (computerSelection == "scissors") {
        console.log("Both Chose Paper! Tie Game!");
        linkPlayerSelection.textContent = "You Chose Scissors!";
        linkComputerSelection.textContent="The Computer Chose Scissors!"
    }

    else {
        console.log("Unexpected Error");
    }
};


function reloadPage() {
    document.location.reload()
};



rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);
linkBtnReset.addEventListener("click", reloadPage);