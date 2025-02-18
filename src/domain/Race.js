import { getRandomInt } from '../utils.js';
import Car from './Car.js';

class Race {
  constructor(carNames) {
    this.cars = carNames.map(name => new Car(name));
  }

  playOneRound() {
    this.cars.forEach(car => {
      const randomNumber = getRandomInt(10);
      car.go(randomNumber);
    });
    return structuredClone(this.cars);
  }

  playAllRounds(count) {
    const results = [];
    for (let i = 0; i < count; i += 1) {
      results.push(this.playOneRound());
    }
    return results;
  }
}

export default Race;
