let choices = [
    'rock',
    'paper',
    'scissors'
];



/* linking buttons from html to JS */
const rock = document.querySelector('#btn1');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');




function playRound() {

   

    /* computer randomly chooses either rock, paper, or scissors */
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(`The computer picked ${computerSelection}. You picked ${playerSelection} .`);

    /* Method 1: */
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock wins! Congratulations!");
    }


    
    
    /* Method 2: */
    else if (document.getElementById('#btn1').clicked == true && computerSelection == "paper") {
        console.log("Paper wins! You Lose!");
    }

    else if (document.getElementById('#btn1').clicked == true && computerSelection == "rock") {
        console.log("Both Chose Rock! Tie Game!");
    }

    else if (document.getElementById('#btn2').clicked == true && computerSelection == "scissors") {
        console.log("Scissors Beat Paper! You Lose!");
    }

    else if (document.getElementById('#btn2').clicked == true && computerSelection == "rock") {
        console.log("Paper Beats Rock! Congratulations!");
    }

    else if (document.getElementById('#btn2').clicked == true && computerSelection == "paper") {
        console.log("Both Chose Paper! Tie Game!");
    }

    else if (document.getElementById('#btn3').clicked == true && computerSelection == "rock") {
        console.log("Rock Beats Scissors! You Lose!");
    }

    else if (document.getElementById('#btn3').clicked == true && computerSelection == "paper") {
        console.log("Scissors Beat Paper! Congratulations!");
    }

    else if (document.getElementById('#btn3').clicked == true && computerSelection == "scissors") {
        console.log("Both Chose Paper! Tie Game");
    }

    else {
        console.log("Unexpected Error");
    }

    console.log(playerSelection);
    

    


   
    
};
function funGame() {
    if (document.getElementById('#btn1').clicked == true) {
        playerSelection = "rock";
        playRound();
    } else {
        playerSelection = "unavailable";
    }
};



rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

function game() {
    playRound()
    };






/*game() */ 