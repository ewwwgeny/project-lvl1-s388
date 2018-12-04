import readlineSync from 'readline-sync';

// welcome and greeting messages
export const sayWelcome = () => console.log('Welcome to the Brain Games!');
export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// game rules
const getEvenGameRules = () => console.log('Answer "yes" if number even otherwise answer "no".');

// common functions
const isEven = num => num % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// games
export const runEvenGame = () => {
  const roundsCount = 3;
  sayWelcome();
  getEvenGameRules();
  const nickName = greetUser();
  const runGame = () => {
    for (let i = 1; i <= roundsCount; i += 1) {
      const questionNumber = getRandomNumber(1, 99);
      console.log(`Question: ${questionNumber}`);
      const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== correctAnswer) {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
        return null;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${nickName}!`);
    return null;
  };
  runGame();
};
