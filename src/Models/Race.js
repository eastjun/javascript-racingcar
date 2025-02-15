import { isDuplicated, isLessThanMin } from '../utils/validations.js';
import Car from './Car.js';

class Race {
  cars;
  tryCount;

  constructor(carNames, tryCount) {
    this.#validateCarNames(carNames);

    this.cars = carNames.map((car) => new Car(car));
    this.tryCount = tryCount;
  }

  #validateCarNames(carNames) {
    if (isLessThanMin(carNames.length, 2)) throw new Error('[ERROR] 자동차는 2대 이상이여야 합니다.');
    if (isDuplicated(carNames)) throw new Error('[ERROR] 자동차 이름은 중복되면 안됩니다.');
  }
}

export default Race;
