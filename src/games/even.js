import readlineSync from 'readline-sync';
import { getRandomNumber } from '..';
import { sayCorrect, sayWrong } from '../messengers';

const isEven = num => num % 2 === 0;
const showAndGetRandomNumber = () => {
  const questionNumber = getRandomNumber(1, 99);
  console.log(`Question: ${questionNumber}`);
  return questionNumber;
};
// playRoundEven
export default () => {
  const correctAnswer = isEven(showAndGetRandomNumber()) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer === correctAnswer ? sayCorrect() : sayWrong(userAnswer, correctAnswer);
};
