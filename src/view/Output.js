import { OUTPUT_MESSAGE } from '../Const.js';

class Output {
  static printNewLine = () => {
    return '\n';
  };

  static printLine(message) {
    console.log(message);
  }

  #formatRoundResult(raceResult) {
    return raceResult.reduce((acc, roundResult) => {
      return (acc +=
        `${roundResult.raceCarName}: ${'-'.repeat(roundResult.racePosition)}` +
        Output.printNewLine());
    }, '');
  }

  #formatRaceResult(raceResults) {
    return raceResults.reduce((acc, raceResult) => {
      return (acc +=
        this.#formatRoundResult(raceResult) + Output.printNewLine());
    }, '');
  }

  #formatWinner(winnerList) {
    return winnerList.map((winner) => winner.raceCarName).join(', ');
  }

  printResult(raceResults, winnerList) {
    const formattedRaceResult = this.#formatRaceResult(raceResults);

    console.log(
      Output.printNewLine() +
        OUTPUT_MESSAGE.result +
        Output.printNewLine() +
        formattedRaceResult +
        `최종 우승자: ${this.#formatWinner(winnerList)}`
    );
  }
}

export default Output;
