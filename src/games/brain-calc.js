import { getRandomNumber } from '../utils';
import { playGame, makeGameData } from '..';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  let operator;
  let answer;

  switch (getRandomNumber(1, 3)) {
    case 1:
      operator = '+';
      answer = number1 + number2;
      break;
    case 2:
      operator = '-';
      answer = number1 - number2;
      break;
    default:
      operator = '*';
      answer = number1 * number2;
      break;
  }

  const question = `${number1} ${operator} ${number2}`;
  return makeGameData(question, `${answer}`);
};

export default () => {
  playGame(description, getGameData);
};
