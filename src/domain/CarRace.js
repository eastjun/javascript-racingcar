import { CAR_MOVE_STANDARD } from '../lib/constants.js';
import { getRandomInteger } from '../lib/utils.js';
import Car from './Car.js';

export default class CarRace {
  #cars;
  #tryCount;

  constructor(names, tryCount) {
    this.#cars = this.#makeCars(names);
    this.#tryCount = tryCount;
  }

  #makeCars(names) {
    return names.map(name => new Car(name));
  }

  runRace(onRoundEnd) {
    for (let round = 0; round < this.#tryCount; round++) {
      this.#cars.forEach(car => {
        if (this.#checkCarGo()) car.go();
      });

      onRoundEnd(this.#cars);
    }
  }

  #checkCarGo() {
    return getRandomInteger(9) >= CAR_MOVE_STANDARD;
  }

  getWinners() {
    const winnerPosition = Math.max(...this.#cars.map(car => car.position));
    return this.#cars
      .filter(car => car.position === winnerPosition)
      .map(car => car.name);
  }
}
