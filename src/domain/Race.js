import { getRandomNumber } from '../utils/randomNumber.js';

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  canMove() {
    const randomNumber = getRandomNumber();

    return randomNumber >= 4;
  }

  tryMove(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        car.updateHistory(this.canMove());
      });
    }
  }

  getWinner(cars) {
    const finalPosition = cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);

    const winner = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    return winner;
  }
}

export default Race;
