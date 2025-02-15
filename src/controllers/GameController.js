import Input from "../views/Input.js";
import Output from "../views/Output.js";
import RaceController from "./RaceController.js";
import validateCarNames from "../validations/validateCarNames.js";
import validateTryCount from "../validations/validateTryCount.js";
import Console from "../utils/Console.js";

class GameController {
  async play() {
    const { names, tryCount } = await this.#readAndValidateInputs();

    const raceController = new RaceController(names, tryCount);

    Output.printRaceStart();
    raceController.race();

    const winners = raceController.getWinners();
    Output.printWinner(winners);
  }

  async #readAndValidateInputs() {
    const names = await this.#retryValidCheck(async () => {
      const input = await Input.carName();
      return validateCarNames(input);
    });

    const tryCount = await this.#retryValidCheck(async () => {
      const input = await Input.tryCount();
      return validateTryCount(input);
    });

    return { names, tryCount };
  }

  async #retryValidCheck(readAndValidate) {
    while (true) {
      try {
        return await readAndValidate();
      } catch (error) {
        Console.printErrorMessage(error);
      }
    }
  }
}

export default GameController;
