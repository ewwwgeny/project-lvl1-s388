import readlineSync from 'readline-sync';

// for index.js
export const sayWelcome = () => console.log('Welcome to the Brain Games!');
export const sayCongratulations = name => console.log(`Congratulations, ${name}!`);
export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// for games
export const sayCorrect = () => {
  console.log('Correct!');
  return true;
};
export const sayWrong = (userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  return false;
};
