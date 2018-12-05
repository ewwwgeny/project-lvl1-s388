import { getRandomNumber, runGame } from '..';
import { cons } from 'hexlet-pairs';

const getRandomOperation = () => {
  const possibleOps = '+-*';
  return possibleOps[Math.floor(Math.random() * possibleOps.length)];
};
const resolveExpr = (firstNum, secNum, operation) => {
  if (operation === '+') return firstNum + secNum;
  if (operation === '-') return firstNum - secNum;
  return firstNum * secNum; // operation === '*'
};

// runCalcGame
export default () => {
  const gameRules = 'What is the result of the expression?';
  const makeQuestion = () => {
    const firstOperand = getRandomNumber(1, 99);
    const secondOperand = getRandomNumber(1, 99);
    const operator = getRandomOperation();
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = String(resolveExpr(firstOperand, secondOperand, operator));
    return cons(question, answer);
  };
  runGame(gameRules, makeQuestion);
};
