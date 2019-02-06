import * as game from './game-base';

export default () => {
  const winnerScore = 3;

  game.greeting();
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const username = game.askName();

  let isWinner = true;

  for (let i = 0; i < winnerScore; i += 1) {
    const question = game.getRandomNumber(1, 1000);
    const even = game.isEven(question);
    const correctAnswer = even ? 'yes' : 'no';

    game.askQuestion(question);
    const answer = game.getAnswer();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isWinner = false;
      break;
    }
  }

  game.finishGame(isWinner, username);
};
