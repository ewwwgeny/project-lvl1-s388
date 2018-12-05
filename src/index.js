import { sayCongratulations, sayWelcome, greetUser } from './messengers';
import getRules from './gameRules';
import playRoundEven from './games/even';
import playRoundCalc from './games/calc';

// common functions
export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// game types
export const even = 'even';
export const calc = 'calc';

// game switcher
const playRound = (gameType) => {
  if (gameType === 'even') {
    return playRoundEven();
  }
  if (gameType === 'calc') {
    return playRoundCalc();
  }
  return null;
};

// game template
export const runGame = (gameType) => {
  const roundsCount = 3;
  sayWelcome();
  getRules(gameType);
  const nickName = greetUser();
  for (let i = 1; i <= roundsCount; i += 1) {
    if (playRound(gameType) === false) {
      return null;
    }
  }
  sayCongratulations(nickName);
  return null;
};
