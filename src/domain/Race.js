import CarPositionHistory from './CarPositionHistory.js';
import { canMove } from '../validation/raceValidates.js';
class Race {
  carPositionHistory = new CarPositionHistory();

  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  tryMove() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => {
        if (canMove()) car.move();
        this.carPositionHistory.saveHistory(car);
      });
    }
  }

  getWinner() {
    const finalPosition = this.cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);

    const winner = this.cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    return winner;
  }
}

export default Race;
