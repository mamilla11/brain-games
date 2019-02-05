#!/usr/bin/env node

import * as game from '..';

const winnerScore = 3;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const username = game.askName();

let score = 0;
let isWinner = true;

while (score !== winnerScore) {
  const randomNumber = game.getRandomNumber(1, 1000);
  const even = game.isEven(randomNumber);
  const correctAnswer = even ? 'yes' : 'no';

  game.askQuestion(randomNumber);
  const answer = game.getAnswer();

  if (answer === correctAnswer) {
    console.log('Correct!');
    score += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    isWinner = false;
    break;
  }
}

game.finishGame(isWinner, username);
