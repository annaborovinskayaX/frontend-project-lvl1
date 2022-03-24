import getGameFrame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameInfo = () => {
  const checkParity = (number) => number % 2 === 0;
  const number = getRandomInt(1, 1000);
  const answer = checkParity(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

const playEvenGame = () => getGameFrame(rules, getGameInfo);

export default playEvenGame;
