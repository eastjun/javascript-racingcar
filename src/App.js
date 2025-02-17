import Race from "./domain/Race.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import validateAttemptCount from "./validation/validateAttemptCount.js";
import validateCarNameList from "./validation/validateCarNameList.js";

class App {
  async getNameInput() {
    const names = await InputView.getCarNameList();
    validateCarNameList(names);
    return names;
  }

  async getAttemptCount() {
    const attempts = await InputView.getAttemptCount();
    validateAttemptCount(attempts);
    return attempts;
  }

  async run() {
    const carNameList = await InputView.retryOnError(() => this.getNameInput());

    const attemptCount = await InputView.retryOnError(() => this.getAttemptCount());

    const race = new Race(carNameList, attemptCount);

    const { raceResult, winners } = race.play();

    OutputView.printOutput(raceResult, winners);
  }
}

export default App;
