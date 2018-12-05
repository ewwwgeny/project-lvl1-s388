// getRules switcher
export default (gameType) => {
  switch (gameType) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".');
      break;
    default: // calc
      console.log('What is the result of the expression?');
      break;
  }
};
