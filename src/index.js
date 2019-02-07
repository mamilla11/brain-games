import * as game from './games/game-base';

export const playGame = (rules, getGameData) => {
  game.greeting();
  game.showRules(rules);

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

export default playGame;
