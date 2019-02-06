import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const isEven = number => number % 2 === 0;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const finishGame = (success, username) => {
  if (success) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default greeting;
