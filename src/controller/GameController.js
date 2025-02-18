import Input from "../view/Input.js";
import Output from "../view/Output.js";
import Race from "../domain/Race.js";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryCount from "../validation/validateTryCount.js";
import Car from "../domain/Car.js";
import retryValidCheck from "../utils/retryValidCheck.js";

class GameController {
  async play() {
    const { names, tryCount } = await this.#readAndValidateInputs();

    const carsInstance = names.map((name) => new Car(name));
    const race = new Race(carsInstance, tryCount);

    const raceResults = race.raceStart();
    Output.printRaceResults(raceResults);

    const winners = race.getWinners();
    Output.printWinners(winners);
  }

  async #readAndValidateInputs() {
    const names = await retryValidCheck(async () => {
      const input = await Input.carName();
      return validateCarNames(input);
    });

    const tryCount = await retryValidCheck(async () => {
      const input = await Input.tryCount();
      return validateTryCount(input);
    });

    return { names, tryCount };
  }
}

export default GameController;
