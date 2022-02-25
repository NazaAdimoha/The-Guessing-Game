'use strict';

// let btwNumber = Math.trunc(Math.random() * 20) + 2;

document.querySelector('.between').textContent = 'Between 1 and 20';
// document.querySelector('.between').textContent = btwNumber;

let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = '?';

document.querySelector('.again').style.display = 'none';

const checkScore = document.querySelector('.check');

const reset = document.querySelector('.again');

let score = 10;
let highScore = 0;

// start game
checkScore.addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  if (inputNumber === randomNumber && inputNumber <= 20 && inputNumber !== 0) {
    document.querySelector('.message').textContent = 'Yepee 😎';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.body').style.backgroundColor = '#60b347';
    document.querySelector('.again').textContent = 'Play Again';
    document.querySelector('.again').style.display = 'block';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      highScore = highScore;
      // document.querySelector('.highscore').textContent = highScore;
    }
  } else if (
    inputNumber > randomNumber &&
    inputNumber <= 20 &&
    inputNumber !== 0
  ) {
    document.querySelector('.message').textContent = 'too high 😪';

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.again').style.display = 'block';
      document.querySelector('.again').textContent = 'Try Again Mate';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.score').textContent = 0;
    }

    //between 1 - 20
  } else if (inputNumber > 20) {
    document.querySelector('.message').textContent =
      'Please select numbers from 1 - 20';

  } else if (inputNumber < randomNumber && inputNumber <= 20 && inputNumber !== 0) {

    document.querySelector('.message').textContent = 'too low 😪';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Game Over';
        document.querySelector('.again').style.display = 'block';
        document.querySelector('.again').textContent = 'Try Again Mate';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.again').style.color = '#333';
        document.querySelector('.score').textContent = 0;
      }
    // if (score > 1) {
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } 
  } else {
    document.querySelector('.message').textContent = 'wrong input 🥱';
  }
});

//reset my game

document.querySelector('.number').textContent = '?';

reset.addEventListener('click', function () {
  document.querySelector('.again').style.display = 'none';
  score = 10;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.body').style.backgroundColor = '#333';
  // document.querySelector('.again').style.display = 'none';
  // document.querySelector('.again').textContent = 'Try Again Mate';

});
