import RacingCar from './domain/RacingCar.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validate from './domain/Validate.js';

class App {
  async run() {
    const carNames = await this.#getCarNames();
    const attempts = await this.#getAttempts();

    const cars = RacingCar.createCars(carNames);

    const raceResult = this.#roundOfRacing(cars, attempts);
    const winners = RacingCar.getWinners(raceResult);

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
      Validate.isEmpty(carNames);
      const carNamesList = carNames.split(',');
      carNamesList.forEach(carName => {
        Validate.isEmpty(carName);
        Validate.carCount(carNamesList);
        Validate.carNameLength(carName);
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
      Validate.isEmpty(attempts);
      const numAttempts = Number(attempts);
      Validate.isNumber(numAttempts);
      Validate.isPositiveNumber(numAttempts);
      Validate.isInteger(numAttempts);
    } catch (error) {
      throw error;
    }
  }

  #roundOfRacing(cars, attempts) {
    OutputView.printResultMessage();
    let raceResult = [...cars];

    for (let i = 0; i < attempts; i++) {
      raceResult = RacingCar.oneRound(raceResult);
      const results = raceResult.map(car => ({
        name: car.name,
        position: car.position
      }));
      OutputView.printOneRoundResult(results);
    }

    return raceResult;
  }
}

export default App;
