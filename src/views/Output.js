import { OUTPUT_PROMPT_MESSAGE } from "../constants/constants.js";
import Console from "../utils/Console.js";

const EXPRESSION_FLAG = "-";

const Output = {
  printRaceStart() {
    Console.print(OUTPUT_PROMPT_MESSAGE.RACE_RESULT);
  },
  printCarStatus(name, count) {
    Console.print(`${name} : ${EXPRESSION_FLAG.repeat(count)}`);
  },
  printRoundResult(roundResult) {
    roundResult.forEach(({ name, count }) => {
      Output.printCarStatus(name, count);
    });
    Console.printLineBreak();
  },
  printRaceResults(raceResults) {
    Output.printRaceStart();
    raceResults.forEach((roundResult) => {
      Output.printRoundResult(roundResult);
    });
  },
  printWinners(winners) {
    Console.print(`${OUTPUT_PROMPT_MESSAGE.FINAL_WINNERS}: ${winners.join(", ")}`);
  },
};

export default Output;
