import Car from './Car.js';
import { getRandomNumber } from '../util/random.js';

class RacingCar {
    createCars(carNames) {
        return carNames.map(name => new Car(name));
    }

    oneRound(cars) {
        cars.forEach(car => {
            car.move(getRandomNumber(0, 10));
        });
        return cars;
    }

    #getMaxPosition(cars) {
        const hasMaxPositionCar = cars.reduce((prev, value) => {
            if (prev.position >= value.position) {
                return prev;
            } else {
                return value;
            }
        });
        return hasMaxPositionCar.position;
    }

    getWinners(cars) {
        const maxPosition = this.#getMaxPosition(cars);
        const winners = [];
        cars.forEach(car => {
            if (car.position === maxPosition) {
                winners.push(car.name);
            }
        });
        return winners;
    }

}

export default RacingCar;
