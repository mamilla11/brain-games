import { getRandomNumber } from '../utils';
import { playGame, makeGameData } from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandomNumber(2, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';

  return makeGameData(question, answer);
};

export default () => {
  playGame(description, getGameData);
};
