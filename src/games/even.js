import { getRandomNumber, runGame } from '..';
import { cons } from 'hexlet-pairs';

// runEvenGame
export default () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".';
  const isEven = num => num % 2 === 0;
  const makeQuestion = () => {
    const question = getRandomNumber(1, 99);
    const answer = isEven(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  runGame(gameRules, makeQuestion);
};
