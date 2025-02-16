import Race from "./domain/Race.js";
import InputHandler from "./input/InputHandler.js";
import OutputView from "./views/OutputView.js";

class App {
  printOutput(raceResult, winners) {
    OutputView.printStartMessage();

    raceResult.forEach((carStatus) => {
      OutputView.printCarStatus(carStatus);
    });

    OutputView.printWinners(winners);
  }

  async run() {
    const carNameList = await InputHandler.getCarNameList();
    const attemptCount = await InputHandler.getAttemptCount();

    const race = new Race(carNameList, attemptCount);

    const { raceResult, winners } = race.play();

    this.printOutput(raceResult, winners);
  }
}

export default App;
