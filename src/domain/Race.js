import { canMove } from '../validation/raceValidates.js';

class Race {
  #cars;
  #tryCount;
  #history;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
    this.#history = new Map();
  }

  get cars() {
    return this.#cars;
  }

  get tryCount() {
    return this.#tryCount;
  }

  saveHistory(car) {
    if (!this.#history.has(car.name)) {
      this.#history.set(car.name, []);
    }
    this.#history.get(car.name).push(car.position);
  }

  getHistory(carName) {
    return this.#history.get(carName) || [];
  }

  tryMove() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.#cars.forEach((car) => {
        if (canMove()) car.move();
        this.saveHistory(car);
      });
    }
  }

  getWinner() {
    const finalPosition = this.#cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);
    return this.#cars.filter((car) => car.position === maxPosition).map((car) => car.name);
  }
}

export default Race;
