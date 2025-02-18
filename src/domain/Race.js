import {
  validateRaceCarNames,
  validateSeparatedCars,
} from '../view/validators/RaceCarNameValidator.js';
import { validateRaceCount } from '../view/validators/RaceCount.js';
import Car from './Car.js';
import Round from './Round.js';
class Race {
  #raceCount;
  #round;
  #raceResult;

  constructor(names, raceCount) {
    validateSeparatedCars(names);
    validateRaceCount(raceCount);

    const cars = names.map((raceCarName) => {
      validateRaceCarNames(raceCarName);
      return new Car(raceCarName);
    });

    this.#raceCount = raceCount;
    this.#round = new Round(cars);
    this.#raceResult = [];
  }

  getWinner() {
    return this.#round.getMostMovedCar();
  }

  raceCar() {
    Array.from({ length: this.#raceCount }, () => {
      this.#round.playOneRound();
      this.#raceResult.push(this.#round.getRoundResult());
    });
  }

  getRaceResult() {
    return this.#raceResult;

  }
}

export default Race;
