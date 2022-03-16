import { getRandomInt, gameFrame } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameInfo = () => {
  const isEven = (number) => number % 2 === 0;
  const number = getRandomInt(1, 1000);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

const evenGame = () => gameFrame(rules, gameInfo);

export default evenGame;
