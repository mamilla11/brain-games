import { getRandomNumber } from '../utils';
import { playGame, makeGameData } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return makeGameData(question, answer);
};

export default () => {
  playGame(description, getGameData);
};
