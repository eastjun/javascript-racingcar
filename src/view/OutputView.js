import {
  FORWARD_DASH,
  GAME_MESSAGE,
  SEPARATOR,
} from '../constants/systemMessages.js';

const OutputView = Object.freeze({
  printMessage(content) {
    console.log(content);
  },

  printBlank() {
    console.log();
  },

  printRaceStatus(raceStatus) {
    raceStatus.forEach((turn) => {
      turn.forEach(({ name, position }) =>
        OutputView.printMessage(`${name} : ${FORWARD_DASH.repeat(position)}`),
      );
      this.printBlank();
    });
  },

  printRaceWinner(winner) {
    OutputView.printMessage(
      `${GAME_MESSAGE.WINNER} ${winner.join(`${SEPARATOR} `)}`,
    );
  },
});

export default OutputView;
