import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

// common functions
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// greets player and saves his name
export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// game template
export const runGame = (gameRules, makeQuestionPair) => {
  const roundsCount = 3;
  console.log('Welcome to the Brain Games!');
  console.log(gameRules);
  const userName = greetUser();
  for (let i = 1; i <= roundsCount; i += 1) {
    const questionPair = makeQuestionPair();
    const question = car(questionPair);
    const correctAnswer = cdr(questionPair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};
