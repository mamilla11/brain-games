import { getRandomNumber } from '../utils';
import { playGame, makeGameData } from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);
  const step = getRandomNumber(2, 10);
  const startNumber = getRandomNumber(1, 100);

  const answer = startNumber + step * hiddenNumberIndex;
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    question += (i === hiddenNumberIndex) ? '.. ' : `${startNumber + step * i} `;
  }

  return makeGameData(question, answer);
};

export default () => {
  playGame(description, getGameData);
};
