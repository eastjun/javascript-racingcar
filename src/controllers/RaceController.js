import { SYSTEM_MESSAGE } from "../constants/SystemMessage.js";
import Cars from "../domain/Cars.js";
class RaceController {
  #inputView;
  #outputView;

  constructor(views) {
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
  }

  async race() {
    const parsedCarNames = await this.#initCarNames();
    const parsedTryCount = await this.#initTryCount();

    const cars = new Cars(parsedCarNames);

    this.#processRacing(cars, parsedTryCount);
    this.#processWinner(cars);
  }

  async #initCarNames() {
    while (true) {
      try {
        const carNames = await this.#inputView.getCarNames(
          SYSTEM_MESSAGE.INPUT_CAR_NAME,
        );
        const parsedCarNames = carNames
          .split(",")
          .map((carName) => carName.trim());
        new CarNameValidator().valiateNames(parsedCarNames);
        return parsedCarNames;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  async #initTryCount() {
    while (true) {
      try {
        const tryCount = await this.#inputView.getTryCount(
          SYSTEM_MESSAGE.INPUT_TRY_COUNT,
        );
        return tryCount;
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  #processRacing(cars, parsedTryCount) {
    this.#outputView.printResultHeader();

    const carList = cars.getCars();

    Array.from({ length: parsedTryCount }).forEach(() => {
      cars.moveCars();
      this.#outputView.printRaceResult(carList);
      this.#outputView.printNewLine();
    });
  }

  #processWinner(cars) {
    const winners = cars.getWinners();
    this.#outputView.printResult(
      SYSTEM_MESSAGE.OUTPUT_WINNER,
      winners.join(SYSTEM_MESSAGE.OUTPUT_WINNER_SEPERATOR),
    );
  }
}

export default RaceController;
