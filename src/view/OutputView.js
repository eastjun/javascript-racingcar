import { SYSTEM_MESSAGE } from "../constants/SystemMessage.js";

class OutputView {
  printResultHeader() {
    console.log(SYSTEM_MESSAGE.OUTPUT_RACE_HEADER);
  }

  printResult(value, result) {
    console.log(`${value}${SYSTEM_MESSAGE.OUTPUT_RACE_DELIMITER}${result}`);
  }

  printNewLine() {
    console.log();
  }
}

export default OutputView;
