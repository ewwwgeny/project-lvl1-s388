import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What is the result of the expression?';

const getRandomOperation = () => {
  const possibleOps = '+-*';
  return possibleOps[getRandomNumber(0, possibleOps.length - 1)];
};

const resolveExpr = (firstNum, secNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secNum;
    case '-':
      return firstNum - secNum;
    default: // case '*'
      return firstNum * secNum;
  }
};

// runCalcGame
export default () => {
  const makeQuestion = () => {
    const firstOperand = getRandomNumber(1, 99);
    const secondOperand = getRandomNumber(1, 99);
    const operator = getRandomOperation();
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = String(resolveExpr(firstOperand, secondOperand, operator));
    return cons(question, answer);
  };
  runGame(gameDescription, makeQuestion);
};
