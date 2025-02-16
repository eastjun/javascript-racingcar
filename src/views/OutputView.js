import ERROR from '../constants/Error.js';

const OutputView = {
  roundResult(name, position) {
    console.log(`${name} : ${'-'.repeat(position)}`);
  },

  break() {
    console.log();
  },
  gameResult(winnerNames) {
    const winnerMessge = winnerNames.join(', ');
    const resultMessage = `최종 우승자: ${winnerMessge}`;
    console.log(resultMessage);
  },
  printValidationResults(validationResults) {
    Object.entries(validationResults).forEach(([key, value]) => {
      if (value) console.log(`${ERROR.MESSAGE.INPUT_NAME[key]}`);
    });
    this.break();
  },
};

export default OutputView;
