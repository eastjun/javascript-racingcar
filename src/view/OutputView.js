import { OUTPUT_MESSAGE } from "../constants/view.js";

export default class OutputView {
  static printProgressResult(carName, carPosition) {
    console.log(
      `${carName} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(carPosition)}`,
    );
  }

  static printWinner(winners) {
    console.log(
      `최종 우승자: ${winners.map((winner) => winner.name).join(", ")}`,
    );
  }

  static printResultText() {
    console.log(OUTPUT_MESSAGE.RESULT);
  }

  static printNewLine() {
    console.log("");
  }
}
