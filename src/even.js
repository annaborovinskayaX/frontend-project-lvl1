import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  const isEven = (number) => number % 2 === 0;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(1, 1000);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
export default evenGame;
