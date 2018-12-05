import readlineSync from 'readline-sync';
import { getRandomNumber } from '..';
import { sayCorrect, sayWrong } from '../messengers';

const getRandomOperation = () => {
  const possibleOps = '+-*';
  return possibleOps[Math.floor(Math.random() * possibleOps.length)];
};

const showAndCalcRandomExpr = () => {
  const firstOperand = getRandomNumber(1, 99);
  const secondOperand = getRandomNumber(1, 99);
  const operator = getRandomOperation();
  console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default: // case '*'
      return firstOperand * secondOperand;
  }
};

// playRoundCalc
export default () => {
  const correctAnswer = String(showAndCalcRandomExpr());
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer === correctAnswer ? sayCorrect() : sayWrong(userAnswer, correctAnswer);
};
