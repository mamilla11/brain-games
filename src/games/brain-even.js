import { getRandomNumber } from '../utils';
import { makeGameData } from './game-data';
import { playGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return makeGameData(question, answer);
};

export default () => {
  playGame(rules, getGameData);
};
