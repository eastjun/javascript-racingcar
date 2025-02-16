import RacingcarManager from './domain/RacingcarManager.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validate from './domain/Validate.js';

class App {
  #validate

  constructor() {
    this.#validate = new Validate();
  }

  async run() {
    const racingcarManager = new RacingcarManager();

    const carNames = await this.#getCarNames();
    const attempts = await this.#getAttempts();

    const cars = racingcarManager.createCars(carNames);

    const raceResult = this.#roundOfRacing(racingcarManager, cars, attempts);
    const winners = racingcarManager.getWinners(raceResult);

    OutputView.printWinners(winners);
  }

  async #getCarNames() {
    while (true) {
      try {
        const carNames = await InputView.readCarNames();
        this.#validateCarName(carNames);
        return carNames.split(',');
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  #validateCarName(carNames) {
    try {
      this.#validate.isEmpty(carNames);
      const carNamesList = carNames.split(',');
      carNamesList.forEach(carName => {
        this.#validate.isEmpty(carName);
        this.#validate.carCount(carNamesList);
        this.#validate.carNameLength(carName);
      });
    } catch (error) {
      throw error;
    }
  }

  async #getAttempts() {
    while (true) {
      try {
        const attempts = await InputView.readAttempts();
        this.#validateAttempts(attempts);
        return Number(attempts);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  #validateAttempts(attempts) {
    try {
      this.#validate.isEmpty(attempts);
      const numAttempts = Number(attempts);
      this.#validate.isNumber(numAttempts);
      this.#validate.isPositiveNumber(numAttempts);
      this.#validate.isInteger(numAttempts);
    } catch (error) {
      throw error;
    }
  }

  #roundOfRacing(racingcarManager, cars, attempts) {
    OutputView.printResultMessage();
    let raceResult = [...cars];

    for (let i = 0; i < attempts; i++) {
      raceResult = racingcarManager.oneRound(raceResult);
      OutputView.printOneRoundResult(raceResult);
    }

    return raceResult;
  }

}

export default App;
