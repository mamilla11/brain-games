import { getRandomNumber } from '../utils';
import { makeGameData } from './game-data';
import { playGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (number1, number2) => {
  if (number1 === number2) {
    return number1;
  }

  const gcd = number1 < number2 ? number1 : number2;

  const iter = (divisor) => {
    if (divisor === 1) {
      return divisor;
    }

    if ((number1 % divisor === 0) && (number2 % divisor === 0)) {
      return divisor;
    }

    return iter(divisor - 1);
  };

  return iter(gcd);
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = `${getGcd(number1, number2)}`;

  return makeGameData(question, answer);
};

export default () => {
  playGame(rules, getGameData);
};
