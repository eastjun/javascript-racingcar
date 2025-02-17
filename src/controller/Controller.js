import Race from '../domain/model/Race.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';
import Validator from '../domain/validator/Validator.js';
import { CONFIG } from '../constants/config.js';
import AttemptsValidator from '../domain/validator/AttemptsValidator.js';
import pickRandomNumber from '../utils/pickRandomNumber.js';

class Controller {
  constructor() {
    this.race = new Race();
  }

  async process() {
    const carNames = await this.readCarNames();
    const attempts = await this.readAttempts();

    this.startRace(carNames, attempts);
  }

  startRace(carNames, attempts) {
    this.race.createCars(carNames);

    OutputView.printResultGreeting();
    for (let i = CONFIG.INITIAL_ATTEMPTS_NUMBER; i < attempts; i++) {
      this.runSingleRound();
      OutputView.printNewLine();
    }
    this.announceWinners();
  }

  runSingleRound() {
    this.race.cars.forEach((car) => {
      const randomNumber = pickRandomNumber();
      this.race.moveForwardCar(car, randomNumber);
      OutputView.printRaceResult(car.name, car.getPosition());
    });
  }

  announceWinners() {
    const winners = this.race.determineWinners();
    OutputView.printWinners(winners);
  }

  async readCarNames() {
    try {
      const input = await readLineAsync(INPUT.CAR_NAMES);
      const carNames = input.split(CONFIG.COMMA);
      carNames.forEach((carName) => {
        Validator.checkCarNameLength(carName);
        Validator.checkBlank(carName);
      });
      Validator.checkDuplicatedCarName(carNames);
      return carNames;
    } catch (err) {
      console.log(err.message);
      return this.readCarNames();
    }
  }

  async readAttempts() {
    try {
      const attempts = await readLineAsync(INPUT.ATTEMPTS);
      AttemptsValidator.checkPositiveNumber(attempts);
      return attempts;
    } catch (err) {
      console.log(err.message);
      return this.readAttempts();
    }
  }
}

export default Controller;
