const Car = require('./Car');

class RacingGame {
  static MOVE_CONDITION = 4;
  #cars;
  #round;

  setCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  setRound(round) {
    this.#round = round;
  }

  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= RacingGame.MOVE_CONDITION) {
        car.move();
      }
    });

    this.#round -= 1;
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const position = car.getPosition();

      return { name, position };
    });
  }

  getWinners(highestScore) {
    return this.#cars
      .filter((car) => car.getPosition() === highestScore)
      .map((car) => car.getName());
  }

  getHighestScore() {
    return Math.max(...this.#cars.map((car) => car.getPosition()));
  }

  isPlaying() {
    return this.#round;
  }
}

module.exports = RacingGame;
