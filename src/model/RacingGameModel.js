import { INIT } from '../constants/constants.js';
import CarModel from './CarModel.js';

export default class RacingGameModel {
  #cars = INIT.CARS;

  #round = INIT.ROUND;

  moveCars(moves) {
    this.#cars = this.#cars.map((car, index) => ({
      ...car,
      position: car.position + moves[index]
    }));
  }

  set cars(names) {
    this.#cars = names.map((name) => ({ name, position: INIT.POSITION }));
    console.log(this.#cars);
  }

  get cars() {
    return this.#cars;
  }

  set round(newRound) {
    this.#round = newRound;
  }

  get round() {
    return this.#round;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.#cars = INIT.CARS;
    this.#round = INIT.ROUND;
  }

  findMaxPosition() {
    const maxPosition = this.#cars.reduce(
      (accumulator, current) => Math.max(accumulator, current.position),
      INIT.POSITION
    );

    return maxPosition;
  }

  findWinners() {
    const maxPosition = this.findMaxPosition();

    const winnerList = this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winnerList;
  }
}
