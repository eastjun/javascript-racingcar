import Car from './domain/Car.js';
import Race from './domain/Race.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { checkCarName } from './validation/carValidates.js';
import { checkTryCount } from './validation/tryCountValidates.js';
class App {
  async run() {
    const carNames = await this.getNameInput();
    const tryCount = await this.getTryCountInput();

    const cars = carNames.map((car) => {
      return new Car(car);
    });

    const race = new Race(cars, tryCount);
    race.tryMove();
    OutputView.printRaceResult(cars, tryCount, race);

    const winners = race.getWinner();
    OutputView.printWinner(winners);
  }

  async getNameInput() {
    const carNamesInput = await InputView.inputCarName();
    return checkCarName(carNamesInput);
  }

  async getTryCountInput() {
    const tryCountInput = await InputView.inputTryCount();
    return checkTryCount(tryCountInput);
  }
}

export default App;
