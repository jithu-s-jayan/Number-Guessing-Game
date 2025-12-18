
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.querySelector('#guessSubmit');
const guessField = document.querySelector('#guessField');
const message = document.querySelector('.message');

let guessCount = 1;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        message.textContent = 'Previous guesses: ';
    }
    message.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You got it right!';
        message.style.color = 'green';
        setGameOver();
    } else if (guessCount === 10) {
        message.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        if (userGuess < randomNumber) {
            message.textContent += 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            message.textContent += 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}
