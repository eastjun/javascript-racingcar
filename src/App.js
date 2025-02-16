import Race from "./domain/Race.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async run() {
    const carNameList = await InputView.getCarNameList();
    const attemptCount = await InputView.getAttemptCount();

    const race = new Race(carNameList, attemptCount);

    const { raceResult, winners } = race.play();

    OutputView.printOutput(raceResult, winners);
  }
}

export default App;
