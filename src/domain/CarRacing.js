import { systemConstants } from "../constants/systemConstants.js";
import randomNumberGenerator from "../util/RandomNumberGenerator.js";

class CarRacing {
  #cars;
  #round;

  constructor(cars, round) {
    this.#cars = cars;
    this.#round = round;
  }

  isMovable(randomNumber) {
    return randomNumber >= systemConstants.MOVABLE_NUMBER;
  }
  moveCar(car) {
    const randomNumber = randomNumberGenerator(
      systemConstants.MINIMUM_RANDOM_NUMBER,
      systemConstants.MAXIMUM_RANDOM_NUMBER
    );
    if (this.isMovable(randomNumber)) {
      car.goForward();
    }
  }
  getRoundResult() {
    const roundResult = [];

    for (const car of this.#cars) {
      this.moveCar(car);
      roundResult.push({ name: car.name, position: car.position });
    }
    return roundResult;
  }
  playRace() {
    const raceResult = [];

    for (let i = 0; i < this.#round; i++) {
      const roundResult = this.getRoundResult();
      raceResult.push(roundResult);
    }
    return raceResult;
  }
  getWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winner = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(", ");
    return winner;
  }
}

export default CarRacing;
