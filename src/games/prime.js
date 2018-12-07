import runGame from '..';
import getRandomNumber from '../utils';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) return false;
  }
  return true;
};

const makeQuestion = () => {
  const question = getRandomNumber(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

// runPrimeGame
export default () => runGame(gameDescription, makeQuestion);
