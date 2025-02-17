import { CarRace } from '../domain/index.js';
import { retryUntilSuccess } from '../lib/utils.js';
import { InputView, OutputView } from '../view/index.js';

export default class Controller {
  async init() {
    const names = await this.#getCarNamesUntilSuccess();
    const tryCount = await this.#getTryCountUntilSuccess();

    const carRace = new CarRace(names, tryCount);

    OutputView.printResultOutput();

    carRace.runRace(cars => OutputView.printEachGame(cars));

    const winners = carRace.getWinners();

    OutputView.printWinner(winners);
  }

  async #getCarNamesUntilSuccess() {
    return retryUntilSuccess(
      async () => {
        return await InputView.getCarNames();
      },
      error => OutputView.printErrorMessage(error),
    );
  }

  async #getTryCountUntilSuccess() {
    return retryUntilSuccess(
      async () => {
        return await InputView.getTryCount();
      },
      error => OutputView.printErrorMessage(error),
    );
  }
}
