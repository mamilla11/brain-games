import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const winnerScore = 3;

const getQuestion = gameData => car(gameData);

const getAnswer = gameData => cdr(gameData);

const isCorrectAnswer = (gameData, userAnswer) => {
  const correctAnswer = getAnswer(gameData);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const finishGame = (success, username) => {
  if (success) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export const makeGameData = (question, answer) => cons(question, answer);

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const playGame = (description, getGameData) => {
  greeting();
  console.log(`${description}\n`);

  const username = askName();

  let isWinner = true;

  for (let i = 0; i < winnerScore; i += 1) {
    const gameData = getGameData();

    console.log(`Question: ${getQuestion(gameData)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (!isCorrectAnswer(gameData, userAnswer)) {
      isWinner = false;
      break;
    }
  }

  finishGame(isWinner, username);
};

export default greeting;
