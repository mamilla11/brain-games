import readlineSync from 'readline-sync';
import { getAnswer, getQuestion } from './game-data';

export const winnerScore = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showRules = (rules) => {
  console.log(rules);
};

export const isCorrectAnswer = (gameData, userAnswer) => {
  const correctAnswer = getAnswer(gameData);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const askQuestion = (gameData) => {
  console.log(`Question: ${getQuestion(gameData)}`);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const finishGame = (success, username) => {
  if (success) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default greeting;
