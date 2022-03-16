import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
	const min1 = Math.ceil(min);
	const max1 = Math.floor(max);
	return Math.floor(Math.random() * (max1 - min1)) + min1;
};

const calcGame = () => {
	console.log('Welcome to the Brain Games!');

	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);

	console.log('What is the result of the expression?');

	const roundsCount = 3;
	  
	const getRandomOperator = () => {
		const array = ['+', '-', '*'];
		const random = Math.floor(Math.random() * array.length);
		return array[random];
	};

	for (let i = 0; i < roundsCount; i += 1) {
		const number1 = getRandomInt(1, 100);
		const number2 = getRandomInt(1, 100);
		const operator = getRandomOperator();
		console.log(`Question: ${number1} ${operator} ${number2}`);
		const userAnswer = readlineSync.question('Your answer: ');
		let answer;

		switch (operator) {
		case '+':
		answer = Number(number1 + number2);
		break;
		case '-':
		answer = Number(number1 - number2);
		break;
		case '*':
		answer = Number(number1 * number2);
		break;
		}
		

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
export default calcGame;
