import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

// runEvenGame
export default () => {
  const makeQuestion = () => {
    const question = getRandomNumber(1, 99);
    const answer = isEven(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  runGame(gameDescription, makeQuestion);
};
