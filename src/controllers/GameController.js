import Input from "../views/Input.js";
import Output from "../views/Output.js";
import Car from "../domains/Car.js";
import validateCarNames from "../validations/validateCarNames.js";
import getValidInput from "../utils/getValidInput.js";
import validateTryCount from "../validations/validateTryCount.js";
import Race from "../domains/Race.js";

class GameController {
  async play() {
    const { carNames, tryCount } = await this.#getValidatedInputs();

    const cars = carNames.map((carName) => new Car(carName));
    const race = new Race(cars);

    Output.printRaceStart();
    Output.printRaceResults(race.playRace(tryCount));
    Output.printWinners(race.getWinners());
  }

  async #getValidatedInputs() {
    const carNames = await getValidInput(Input.carNames, validateCarNames);
    const tryCount = await getValidInput(Input.tryCount, validateTryCount);

    return { carNames, tryCount };
  }
}

export default GameController;
