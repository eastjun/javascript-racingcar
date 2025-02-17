import { OUTPUT_PROMPT_MESSAGE } from "../constants/constants.js";
import Console from "../utils/Console.js";

const Output = {
  printRaceStart() {
    Console.print(OUTPUT_PROMPT_MESSAGE.RACE_RESULT);
  },

  /**
   *
   * @param {Array<Array<{ name: string, count: number }>>} roundResults
   */
  printRoundResults(roundResults) {
    roundResults.flatMap((eachRound) => [
      ...eachRound.map(({ name, count }) => this.printRace(name, count)),
      Console.printLineBreak(),
    ]);
  },

  /**
   *
   * @param {string} name
   * @param {number} count
   */
  printRace(name, count) {
    const EXPRESSION_FLAG = "-";
    Console.print(`${name} : ${EXPRESSION_FLAG.repeat(count)}`);
  },

  /**
   *
   * @param {Array<{string}>} winners
   */
  printWinners(winners) {
    Console.print(`${OUTPUT_PROMPT_MESSAGE.FINAL_WINNERS}: ${winners.join(", ")}`);
  },
};

export default Output;
