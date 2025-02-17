import getRandomValueInRange from '../utils/getRandomValueInRange.js';
import InputValidator from '../view/InputValidator.js';
import Car from './Car.js';

class Racing {
  carList;

  constructor(carNames) {
    this.#validate(carNames);
    this.carList = carNames.map((name) => new Car(name, 0));
  }

  #validate(carNames) {
    InputValidator.carNames(carNames);
  }

  getWinner() {
    const maxPosition = Math.max(
      ...this.carList.map((car) => car.getCarStatus().position),
    );
    return this.carList
      .filter((car) => car.getCarStatus().position === maxPosition)
      .map((car) => car.getCarStatus().name);
  }

  #raceOnce() {
    this.carList.forEach((car) => {
      car.move(getRandomValueInRange(0, 9));
    });
  }

  getStatus(count) {
    const raceStatus = [];

    for (let i = 0; i < count; i++) {
      const turn = [];
      this.#raceOnce();
      this.carList.forEach((car) => {
        const { name, position } = car.getCarStatus();
        turn.push({ name, position });
      });
      raceStatus.push(turn);
    }

    return raceStatus;
  }
}

export default Racing;
