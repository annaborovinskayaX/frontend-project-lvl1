import getGameFrame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameInfo = () => {
  const number = getRandomInt(3, 100);
  const answer = checkIsPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

const playPrimeGame = () => getGameFrame(rules, getGameInfo);

export default playPrimeGame;
