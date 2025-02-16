import Car from './Model/Car.js';
import outputView from './View/output.js';
import { getCarsName, getGameCount } from './View/input.js';
import { readUserInputUntilSuccess } from './View/utils.js';
import Race from './Model/Race.js';
import { validateCarsName } from './Validation/carName.js';
import { validateGameCount } from './Validation/gameCount.js';

class App {
  async #initialize() {
    const carNames = await readUserInputUntilSuccess({
      readUserInput: getCarsName,
      validation: validateCarsName,
    });

    const cars = carNames.split(',').map((carName) => new Car(carName));
    const gameCount = Number(
      await readUserInputUntilSuccess({
        readUserInput: getGameCount,
        validation: validateGameCount,
      }),
    );
    return { cars, gameCount };
  }

  async run() {
    const { cars, gameCount } = await this.#initialize();
    const race = new Race(gameCount, cars);
    race.startRace();
    outputView.printRaceResult(race.getRaceResult());
    outputView.printWinners(race.getWinners());
  }
}

export default App;
