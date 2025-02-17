export const OutputView = {
  printMessage(message) {
    console.log(message);
  },
  printError(error) {
    console.error(error.message);
  },
  printWinner(winner) {
    console.log(`최종 우승자: ${winner.join(', ')}`);
  },
};
