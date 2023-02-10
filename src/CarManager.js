const Car = require('./Car');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

class CarManager {
  #cars = [];

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  progress() {
    this.#cars.forEach((singleCar) => {
      singleCar.tryProgress(RandomNumberGenerator.generate());
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxProgressCount = Math.max(
      ...this.#cars.map((singleCar) => singleCar.getProgressCount()),
    );

    return this.#cars
      .filter((singleCar) => singleCar.getProgressCount() === maxProgressCount)
      .map((winner) => winner.getName());
  }
}

module.exports = CarManager;
