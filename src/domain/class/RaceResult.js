import Car from './Car';

class RaceResult {
  #result;
  #maxTryCount;
  #maxPosition;

  constructor() {
    this.#result = [];
    this.#maxTryCount = 0;
    this.#maxPosition = 0;
  }

  pushCarPosition(car) {
    if (!(car instanceof Car)) throw new Error('[ERROR]Car이 아님');
    this.#result.push(car);
    this.#updateMaxTryCount(car);
    this.#updateMaxPosition(car);
  }

  getProgressMapWhentryCount(tryCount) {
    return this.#result.reduce(
      (map, car) => map.set(car.getName(), car.getPositionWhen(tryCount)),
      new Map()
    );
  }

  getWinnersNameArray() {
    return this.#getWinners().map(car => car.getName());
  }

  #getWinners() {
    return this.#result.filter(
      car => car.getLastPosition() === this.#maxPosition
    );
  }
  #updateMaxTryCount(car) {
    this.#maxTryCount = Math.max(this.#maxTryCount, car.getLastTry());
  }

  #updateMaxPosition(car) {
    this.#maxPosition = Math.max(this.#maxPosition, car.getLastPosition());
  }
}

export default RaceResult;
