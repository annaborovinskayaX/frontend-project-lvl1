import { getRandomInt, gameFrame } from '../index.js';

const getRandomOperator = () => {
  const array = ['+', '-', '*'];
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const rules = 'What is the result of the expression?';

const gameInfo = () => {
  const number1 = getRandomInt(1, 50);
  const number2 = getRandomInt(1, 50);
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;

  let answer;
  switch (operator) {
    case '+':
      answer = String(number1 + number2);
      break;
    case '-':
      answer = String(number1 - number2);
      break;
    case '*':
      answer = String(number1 * number2);
      break;
// no default
  }
  return [question, answer];
};

const calcGame = () => gameFrame(rules, gameInfo);

export default calcGame;
