const MovingDecider = require('../utils/MovingDecider');
const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class RacingCarGame {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  moveCars() {
    const d = MovingDecider.decide(
      this.#cars.length,
      RandomNumberGenerator.generate
    );
    this.#cars.forEach((car, i) => {
      if (!d[i]) return;
      car.move();
    });
  }
}

module.exports = RacingCarGame;
