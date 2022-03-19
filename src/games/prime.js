import { getRandomInt, gameFrame } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameInfo = () => {
  const number = getRandomInt(3, 100);
  const answer = checkIsPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [question, answer];
};

const primeGame = () => gameFrame(rules, gameInfo);

export default primeGame;
