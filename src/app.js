import Car from './Model/Car.js';
import outputView from './View/output.js';
import { getCarsName, getGameCount } from './View/input.js';
import Race from './Model/Race.js';

class App {
  async run() {
    const carNames = await getCarsName();
    const cars = carNames.split(',').map((carName) => new Car(carName));
    const gameCount = Number(await getGameCount());

    const race = new Race(gameCount, cars);

    outputView.printGameResult(gameCount, cars);

    outputView.printWinners(cars);
  }
}

export default App;
