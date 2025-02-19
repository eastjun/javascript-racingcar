import Car from '../domains/Car.js';

class Cars {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  moveCars(moveStrategy) {
    this.#cars.forEach((car) => {
      this.#processMoveCars(car, moveStrategy);
    });
  }

  getMaxPosition() {
    return this.#cars.reduce((maxPosition, car) => {
      return car.comparePosition(maxPosition);
    }, -1);
  }

  #processMoveCars(car, moveStrategy) {
    if (moveStrategy()) {
      car.move();
    }
  }

  get cars() {
    return this.#cars;
  }
}

export default Cars;
