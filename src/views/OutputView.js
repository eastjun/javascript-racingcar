import { CONFIG } from '../constants/config.js';
import { OUTPUT } from '../constants/messages.js';

function normalize(winners) {
  return winners.join(`${CONFIG.COMMA} `);
}

const OutputView = {
  printRaceResult(name, position) {
    console.log(`${name} : ${CONFIG.RACE_STEP.repeat(position)}`);
  },

  printResultGreeting() {
    console.log(OUTPUT.RESULT_GREETING);
  },

  printWinners(winners) {
    console.log(`${OUTPUT.WINNERS} : ${normalize(winners)}`);
  },
  printNewLine() {
    console.log();
  },
};

export default OutputView;
