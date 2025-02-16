import { MOVE_THRESHOLD } from '../Const.js';
import Car from './Car.js';

class Round {
  #cars;

  constructor(names) {
    this.#cars = names.map((raceCarName) => new Car(raceCarName));
  }

  #getMaxMovementCount() {
    return this.#cars.reduce((acc, car) => {
      return acc < car.position ? car.position : acc;
    }, 0);
  }

  #tryMove(randomNumber, car) {
    if (randomNumber >= MOVE_THRESHOLD) {
      car.moveOneStep();
    }
  }

  getMostMovedCar() {
    const MaxMovement = this.#getMaxMovementCount();
    return this.#cars.reduce((acc, car) => {
      if (car.position === MaxMovement) {
        acc.push(car);
      }
      return acc;
    }, []);
  }

  playOneRound() {
    this.#cars.forEach((car) => {
      const randomNumber = Math.floor(Math.random() * 10);
      this.#tryMove(randomNumber, car);
    });
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      return {
        raceCarName: car.raceCarName,
        racePosition: car.position,
      };
    });
  }
}

export default Round;
