import { OUTPUT_MESSAGE, LINE_BREAK } from "../constants/Constants.js";

const OutputView = {
  print(message) {
    console.log(message);
  },

  printStartMessage() {
    this.print(OUTPUT_MESSAGE.RESULT);
  },

  printLineBreak() {
    this.print(LINE_BREAK);
  },

  printCarStatus(turnResult) {
    turnResult.forEach((car) => {
      this.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    this.printLineBreak();
  },

  printWinners(winners) {
    this.print(`${OUTPUT_MESSAGE.WINNER} ${winners.join(", ")}`);
  },

  printOutput(raceResult, winners) {
    OutputView.printStartMessage();

    raceResult.forEach((turnResult) => {
      OutputView.printCarStatus(turnResult);
    });

    OutputView.printWinners(winners);
  },
};

export default OutputView;
