import Random from '../utils/Random';
import Car from './Car';

class Race {
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

      if (randomNumber >= 4) car.move();
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const positions = this.#cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);

    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}

export default Race;
