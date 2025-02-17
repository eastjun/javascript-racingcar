import { CAR_MOVE_STANDARD } from '../lib/constants.js';
import { getRandomNumber } from '../lib/utils.js';
import Car from './Car.js';

export default class CarRace {
  #cars;
  #tryCount;

  constructor(names = [], tryCount) {
    this.#cars = this.#makeCars(names);
    this.#tryCount = tryCount;
  }

  #makeCars(names) {
    return names.map(name => new Car(name));
  }

  runRace(onRoundEnd) {
    for (let round = 0; round < this.#tryCount; round++) {
      this.#cars.forEach(car => {
        const randomNumber = this.#getCarRaceRandomNumber();
        const isCarGo = this.#checkCarGo(randomNumber);

        if (isCarGo) car.go();
      });

      onRoundEnd?.(this.#cars);
    }
  }

  #getCarRaceRandomNumber() {
    return getRandomNumber(9);
  }

  #checkCarGo(carRaceNUmber) {
    return carRaceNUmber >= CAR_MOVE_STANDARD;
  }

  getWinners() {
    const winnerPosition = Math.max(...this.#cars.map(car => car.position));

    return this.#cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);
  }
}
