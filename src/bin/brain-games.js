#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
greetUser();
