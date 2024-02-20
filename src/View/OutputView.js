import { SYMBOL, VIEW_MESSAGES } from '../constanst';

const { WINNER_PREFIX, DISPLAY_CURRENT_DISTANCE } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL, BLANK } = SYMBOL;

const OutputView = {
  printCarCurrentDistance(car) {
    const { name, distance } = car.getInfo();

    console.log(DISPLAY_CURRENT_DISTANCE(name, distance));
  },

  printRaceResult(winners) {
    console.log(`${VIEW_MESSAGES.RESULT_MESSAGE}`);
    console.log(WINNER_PREFIX + winners.map((car) => car.getInfo().name).join(DIVIDE_SYMBOL));
    this.printBlankLine();
  },

  printBlankLine() {
    console.log(BLANK);
  },

  printRaceRecords(recordsArray, tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      let output = '';
      recordsArray.forEach(({ name, records }) => {
        const record = records[i] || 0;
        output += `${name}: ${'-'.repeat(record)}\n`;
      });
      console.log(output);
    }
  },
};

export default OutputView;
