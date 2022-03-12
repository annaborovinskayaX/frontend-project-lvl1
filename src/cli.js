import readlineSync from 'readline-sync';

const Greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default Greetings;
