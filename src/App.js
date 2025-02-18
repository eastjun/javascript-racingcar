import Race from "./domain/Race.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import validateAttemptCount from "./validation/validateAttemptCount.js";
import validateCarNameList from "./validation/validateCarNameList.js";
import retryOnError from "./utils/retryOnError.js";

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
    const carNameList = await retryOnError(
      () => this.getNameInput(),
      (e) => OutputView.print(e.message),
    );

    const attemptCount = await retryOnError(
      () => this.getAttemptCount(),
      (e) => OutputView.print(e.message),
    );

    const race = new Race(carNameList, attemptCount);

    const { raceResult, winners } = race.play();

    OutputView.printOutput(raceResult, winners);
  }
}

export default App;
