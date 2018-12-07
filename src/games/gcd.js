import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (number1, number2) => {
  if (number2 === 0) return number1;
  return findGCD(number2, number1 % number2);
};

const makeQuestion = () => {
  const firstNumber = getRandomNumber(1, 99);
  const secondNumber = getRandomNumber(1, 99);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(findGCD(firstNumber, secondNumber));
  return cons(question, answer);
};

// runGcdGame
export default () => runGame(gameDescription, makeQuestion);
