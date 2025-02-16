import { CarRace } from '../domain/index.js';
import { InputView, OutputView } from '../view/index.js';

export default class Controller {
  async init() {
    const names = await InputView.getCarNames();
    const tryCount = await InputView.getTryCount();

    const carRace = new CarRace(names, tryCount);

    OutputView.printResultOutput();

    carRace.runRace(cars => OutputView.printEachGame(cars));

    const winners = carRace.getWinners();

    OutputView.printWinner(winners);
  }
}
