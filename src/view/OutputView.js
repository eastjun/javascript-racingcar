import { CONSOLE_MESSAGE } from "../constants/message.js";
import { print } from "../utils/console.js";

class OutputView {
  static printBlankLine() {
    print("");
  }

  static printResultIntro() {
    print(CONSOLE_MESSAGE.resultIntro);
  }

  static printMileageBoard(mileageBoard) {
    mileageBoard.forEach(({ name, mileage }) => {
      print(CONSOLE_MESSAGE.mileageBoardForm(name, mileage));
    });
  }

  static printWinners(winners) {
    print(CONSOLE_MESSAGE.winnersForm(winners));
  }
}

export default OutputView;
