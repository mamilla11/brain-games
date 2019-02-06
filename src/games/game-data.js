import { cons, car, cdr } from 'hexlet-pairs';

export const makeGameData = (question, answer) => cons(question, answer);
export const getQuestion = gameData => car(gameData);
export const getAnswer = gameData => cdr(gameData);

export default makeGameData;
