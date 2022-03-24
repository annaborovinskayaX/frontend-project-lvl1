import getGameFrame from '../index.js';
import getRandomInt from '../utils.js';

const getRandomOperator = () => {
  const array = ['+', '-', '*'];
  return array[getRandomInt(0, 2)];
};

const rules = 'What is the result of the expression?';

const getGameInfo = () => {
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

const playCalcGame = () => getGameFrame(rules, getGameInfo);

export default playCalcGame;
