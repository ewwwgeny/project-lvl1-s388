#!/usr/bin/env node
// import readlineSync from 'readline-sync';
import runCalcGame from '../games/calc';
import runEvenGame from '../games/even';
import runGcdGame from '../games/gcd';
import runPrimeGame from '../games/prime';
import runProgressionGame from '../games/progression';
import getRandomNumber from '../utils';

const games = [
  () => runCalcGame(),
  () => runEvenGame(),
  () => runGcdGame(),
  () => runPrimeGame(),
  () => runProgressionGame(),
];

games[getRandomNumber(0, games.length - 1)]();

/* const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
greetUser(); */
