import Random from '../utils/Random';
import Car from './Car';

class Race {
  FREEZE_CHANCE = 4;

  /** @type {Car[]} */
  #cars;

  /**
   * @param {Car[]} cars
   */
  constructor(cars) {
    this.#cars = cars;
  }

  moveOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.randomNumberBetween(0, 10);
      if (randomNumber < Race.FREEZE_CHANCE) return;

      car.move();
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));

    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}

export default Race;
