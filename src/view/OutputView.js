import handleIO from "../utils/handleIO.js";

const RESULT_TITLE = "\n실행 결과";
const ADVANCE = "-";
const WINNER_TITLE = "최종 우승자";
const SEPARATOR = ",";
const DELIMITER = ":";

const OutputView = {
  printResultTitle() {
    handleIO.print(RESULT_TITLE);
  },

  printCarResult(carName, carAdvance) {
    handleIO.print(`${carName} ${DELIMITER} ${ADVANCE.repeat(carAdvance)}`);
  },

  printRacingResult(cars) {
    cars.forEach(({ name, location }) => {
      this.printCarResult(name, location);
    });
    handleIO.print(" ");
  },

  printWinners(names) {
    handleIO.print(`${WINNER_TITLE}${DELIMITER} ${names.join(SEPARATOR + " ")}`);
  },
};

export default OutputView;
