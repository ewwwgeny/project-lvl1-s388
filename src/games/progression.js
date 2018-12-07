import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const getRandomTerm = (firstTerm, prgrssnStep) => {
  const randomTermNumber = getRandomNumber(1, progressionLength);
  return firstTerm + (prgrssnStep * (randomTermNumber - 1));
};

const makeQuestion = () => {
  const firstTerm = getRandomNumber(1, 30);
  const step = getRandomNumber(2, 12);
  const endTerm = firstTerm + (step * (progressionLength - 1));
  const termToMask = getRandomTerm(firstTerm, step);
  let result = '';
  for (let i = firstTerm; i <= endTerm; i += step) {
    if (i === endTerm) {
      result += i === termToMask ? '..' : `${i}`; // without space after last term
    } else {
      result += i === termToMask ? '.. ' : `${i} `;
    }
  }
  return cons(result, String(termToMask));
};

// runProgressionGame
export default () => runGame(gameDescription, makeQuestion);
