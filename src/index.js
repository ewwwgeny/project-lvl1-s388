import readlineSync from 'readline-sync';

let nickName = 'John Doe';

// welcome and greeting messages
export const welcome = () => console.log('Welcome to the Brain Games!');
export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  nickName = userName;
};

// games start messages
const isEvenGameStartMess = () => console.log('Answer "yes" if number even otherwise answer "no".');

// games
export const isEvenGame = () => {
  welcome();
  isEvenGameStartMess();
  greeting();
  const isEven = num => num % 2 === 0;
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const game = (numberOfSteps) => {
    for (let i = 1; i <= numberOfSteps; i += 1) {
      const randomInt = getRandomNumber(1, 99);
      console.log(`Question: ${randomInt}`);
      const correctAnswer = isEven(randomInt) ? 'yes' : 'no';
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== correctAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        break;
      }
      console.log('Correct!');
      if (i === numberOfSteps) {
        console.log(`Congratulations, ${nickName}!`);
      }
    }
  };
  game(3);
};
