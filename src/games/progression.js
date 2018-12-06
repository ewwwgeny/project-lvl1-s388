import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const getRandomTerm = (firstTerm, prgrssnStep) => {
  const randomTermNumber = getRandomNumber(1, progressionLength);
  return firstTerm + (prgrssnStep * (randomTermNumber - 1));
};

// runProgressionGame
export default () => {
  const makeQuestion = () => {
    const progressionStart = getRandomNumber(1, 30);
    const progressionStep = getRandomNumber(2, 12);
    const progressionEnd = progressionStart + (progressionStep * (progressionLength - 1));
    const termToMask = getRandomTerm(progressionStart, progressionStep);
    let result = '';
    for (let i = progressionStart; i <= progressionEnd; i += progressionStep) {
      if (i === progressionEnd) {
        result += i === termToMask ? '..' : `${i}`; // without space after last term
      } else {
        result += i === termToMask ? '.. ' : `${i} `;
      }
    }
    return cons(result, String(termToMask));
  };
  runGame(gameDescription, makeQuestion);
};
