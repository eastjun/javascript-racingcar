import Cars from "../models/Cars.js";
import Winner from "../models/Winner.js";
import CarNameValidator from "../validators/CarNameValidator.js";
import TryCountValidator from "../validators/TryCountValidator.js";

class RaceController {
  #inputView;
  #outputView;

  constructor(views) {
    this.#inputView = views.inputView;
    this.#outputView = views.outputView;
  }

  async race() {
    const parseCarNames = await this.#initCarNames();
    const parseTryCount = await this.#initTryCount();

    const cars = new Cars(parseCarNames);

    this.#processRacing(cars, parseTryCount);
    this.#processWinner(cars);
  }

  async #initCarNames() {
    while(true) {
      try {
        const carNames = await this.#inputView.getCarNames();
        const parseCarNames = carNames
          .split(",")
          .map((carName) => carName.trim());
        new CarNameValidator().valiateNames(parseCarNames);
  
        return parseCarNames;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async #initTryCount() {
    while(true) {
      try {
        const tryCount = await this.#inputView.getTryCount();
        const parseTryCount = Number(tryCount);
        new TryCountValidator().validateNumber(parseTryCount);
  
        return parseTryCount;
      } catch (error) {
        console.log(error);
      }
    }
  }

  #processRacing(cars, parseTryCount) {
    this.#outputView.printResultHeader();
    const carList = cars.cars;

    for (let i = 0; i < parseTryCount; i++) {
      cars.moveCars();
      this.#outputView.printRaceResult(carList);
      this.#outputView.printNewLine();
    }
  }

  #processWinner(cars) {
    const maxPosition = cars.getMaxPosition();
    const carList = cars.cars;

    this.#outputView.printWinners(
      new Winner().getWinners(carList, maxPosition)
    );
  }
}

export default RaceController;
