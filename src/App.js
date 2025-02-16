import Car from './domain/Car.js';
import Race from './domain/Race.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import { checkCarName } from './validation/carValidates.js';
import { checkTryCount } from './validation/tryCountValidates.js';
class App {
  async run() {
    const carNamesInput = await InputView.inputCarName();
    const carNames = checkCarName(carNamesInput);

    const tryCountInput = await InputView.inputTryCount();
    const tryCount = checkTryCount(tryCountInput);

    const cars = carNames.map((car) => {
      return new Car(car);
    });

    const race = new Race(cars, tryCount);
    race.tryMove(cars, tryCount);
    OutputView.outputResult(cars, tryCount);

    const winners = race.getWinner(cars);
    OutputView.printWinner(winners);
  }
}

export default App;
