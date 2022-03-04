let choices = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() {
    let randomAnswer = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomAnswer)
};


computerPlay();