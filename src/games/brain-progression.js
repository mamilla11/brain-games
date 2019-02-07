import { getRandomNumber } from '../utils';
import { makeGameData } from './game-data';
import { playGame } from '..';

const rules = 'What number is missing in the progression?\n';

const getGameData = () => {
  const progressionLength = 10;
  const secretNumber = getRandomNumber(1, progressionLength);
  const progressionStep = getRandomNumber(2, 10);

  let question = '';
  let answer;
  let nextNumber = getRandomNumber(1, 100);

  for (let i = 1; i <= progressionLength; i += 1) {
    if (i !== secretNumber) {
      question += `${nextNumber} `;
    } else {
      question += '.. ';
      answer = `${nextNumber}`;
    }

    nextNumber += progressionStep;
  }

  return makeGameData(question, answer);
};

export default () => {
  playGame(rules, getGameData);
};
