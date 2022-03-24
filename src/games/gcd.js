import getGameFrame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let max;
  let min;

  if (num1 > num2) {
    max = num1;
    min = num2;
  } else {
    max = num2;
    min = num1;
  }

  if (max % min === 0) {
    return min;
  }
  return findGCD(min, max % min);
};

const getGameInfo = () => {
  const number1 = getRandomInt(1, 30);
  const number2 = getRandomInt(1, 20);
  const question = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));
  return [question, answer];
};

const playGcdGame = () => getGameFrame(rules, getGameInfo);

export default playGcdGame;
