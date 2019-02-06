import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc';
import * as game from './games/game-base';

export default (gameName) => {
  let gameRules;
  let getGameData;

  switch (gameName) {
    case 'brain-even':
      gameRules = brainEven.getRules();
      getGameData = brainEven.getGameData();
      break;
    case 'brain-calc':
      gameRules = brainCalc.getRules();
      getGameData = brainCalc.getGameData();
      break;
    default:
      break;
  }

  game.greeting();
  game.showRules(gameRules);

  const username = game.askName();

  let isWinner = true;

  for (let i = 0; i < game.winnerScore; i += 1) {
    const gameData = getGameData();

    game.askQuestion(gameData);
    const userAnswer = game.getUserAnswer();

    if (!game.isCorrectAnswer(gameData, userAnswer)) {
      isWinner = false;
      break;
    }
  }

  game.finishGame(isWinner, username);
};
