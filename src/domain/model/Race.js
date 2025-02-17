// @ts-check
import Car from './Car.js';
import { CONFIG } from '../../constants/config.js';

class Race {
  constructor() {
    this.cars = [];
  }

  createCars(carNames) {
    this.cars = carNames.map((carName) => new Car(carName));
  }

  isMoveCondition(pickedRandomNumber) {
    return pickedRandomNumber >= CONFIG.MINIMUM_RANDOM_NUMBER
    && pickedRandomNumber <= CONFIG.MAXIMUM_RANDOM_NUMBER;
  }

  moveForwardCar(car, pickedRandomNumber) {
    const condition = this.isMoveCondition(pickedRandomNumber);
    car.move(condition);
  }

  determineWinners() {
    const carsPosition = this.cars.map((car) => (
      car.getPosition()
    ));

    const maxPosition = Math.max(...carsPosition);

    const winners = this.cars.filter((car) => (
      car.getPosition() === maxPosition
    )).map((car) => car.name);

    return winners;
  }
}

export default Race;
