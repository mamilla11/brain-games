import { getRandomNumber, isEven } from '../utils';
import { makeGameData } from './game-data';

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".\n';

export const getGameData = () => () => {
  const question = getRandomNumber(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';

  return makeGameData(question, answer);
};

export default getRules;
