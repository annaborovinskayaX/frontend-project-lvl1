import { getRandomInt, gameFrame } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let remainder;
  let gcd;

  if (num1 <= num2) {
    let dividend = num2;
    let divider = num1;

    while (remainder !== 0) {
      remainder = dividend % divider;
      gcd = divider;
      dividend = divider;
      divider = remainder;
    }
  } else {
    let dividend = num1;
    let divider = num2;

    while (remainder !== 0) {
      remainder = dividend % divider;
      gcd = divider;
      dividend = divider;
      divider = remainder;
    }
  }
  return gcd;
};

const gameInfo = () => {
  const number1 = getRandomInt(1, 30);
  const number2 = getRandomInt(1, 20);
  const question = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));
  return [question, answer];
};

const gcdGame = () => gameFrame(rules, gameInfo);

export default gcdGame;
