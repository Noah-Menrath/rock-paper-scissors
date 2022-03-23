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
    }
    else if (computerSelection == "paper") {
        console.log("Paper wins! You Lose!");
    }

    else if (computerSelection == "rock") {
        console.log("Both Chose Rock! Tie Game!");
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
    }

    else if (computerSelection == "rock") {
        console.log("Paper Beats Rock! Congratulations!");
    }

    else if (computerSelection == "paper") {
        console.log("Both Chose Paper! Tie Game!");
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
    }

    else if (computerSelection == "paper") {
        console.log("Scissors Beat Paper! Congratulations!");
    }

    else if (computerSelection == "scissors") {
        console.log("Both Chose Paper! Tie Game!");
    }

    else {
        console.log("Unexpected Error");
    }


};




rock.addEventListener("click", rockChoice);
paper.addEventListener("click", paperChoice);
scissors.addEventListener("click", scissorsChoice);