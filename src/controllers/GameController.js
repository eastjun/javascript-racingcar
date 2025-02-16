import Input from "../views/Input.js";
import Output from "../views/Output.js";
import Race from "../domains/Race.js";
import validateCarNames from "../validations/validateCarNames.js";
import validateTryCount from "../validations/validateTryCount.js";
import Console from "../utils/Console.js";
import Car from "../domains/Car.js";
import retryValidCheck from "../utils/retryValidCheck.js";

class GameController {
  async play() {
    const { names, tryCount } = await this.#readAndValidateInputs();

    const carsInstance = names.map((name) => new Car(name));
    const race = new Race(carsInstance, tryCount);

    Output.printRaceStart();
    const raceResults = race.raceStart();

    this.#printRaceResults(raceResults);

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

  #printRaceResults(raceResults) {
    raceResults.forEach((roundResult) => {
      roundResult.forEach(({ name, count }) => {
        Output.printRace(name, count);
      });
      Console.printLineBreak();
    });
  }
}

export default GameController;
