import getGameFrame from '../index.js';
import getRandomInt from '../utils.js';

const rules = 'What number is missing in the progression?';

const getHideArray = () => {
  const fullArray = [];
  const arrayLength = getRandomInt(7, 10);
  const firstInArray = getRandomInt(1, 16);
  fullArray.push(firstInArray);
  const progressionStep = getRandomInt(2, 9);

  for (let i = 0; i < arrayLength; i += 1) {
    const nextElementInArray = fullArray[i] + progressionStep;
    fullArray.push(nextElementInArray);
  }

  const randomIndex = getRandomInt(0, arrayLength - 1);
  const answer = fullArray[randomIndex];
  fullArray[randomIndex] = '..';
  return [answer, fullArray];
};

const getGameInfo = () => {
  const [answer, fullArray] = getHideArray();
  const question = fullArray.join(' ');
  return [question, String(answer)];
};

const playProgressionGame = () => getGameFrame(rules, getGameInfo);

export default playProgressionGame;
