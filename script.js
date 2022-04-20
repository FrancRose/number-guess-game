'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const textQuery = function (item,text) {
    document.querySelector(item).textContent = text;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    // GUESS CHECK FUNCTION //////////////////////////////////////////////
    // No input
    if(!guess) {
        displayMessage('No Number!')
    //Correct guess
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number!')

        textQuery('.number', secretNumber);
        // document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            textQuery('.highscore', highScore);
            // document.querySelector('.highscore').textContent = highScore;
        }
    // Wrong Guess
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low!';
            score--;
            textQuery('.score', score);
            // document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game =(');
            // document.querySelector('.message').textContent = 'You lost the game';
            textQuery('.score', 0);
            // document.querySelector('.score').textContent = 0;
        }
    }
    //High guess
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // // Low guess
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// GAME RESET FUNCTION /////////////////////////////////////////////////////
document.querySelector('.again').addEventListener('click', function() {
    // RESET LOGIC ---------------------------------
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing....')
    // document.querySelector('.message').textContent = 'Start Guessing...';
    textQuery('.score', score);
    // document.querySelector('.score').textContent = score;
    textQuery('.number', '?')
    // document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // RESET STYLES ---------------------------------------------
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});