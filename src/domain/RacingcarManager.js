import Car from './Car.js';

class RacingcarManager {
    createCars(carNames) {
        return carNames.map(name => new Car(name));
    }

    #getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    oneRound(cars) {
        cars.forEach(car => {
            car.move(this.#getRandomNumber());
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
export default RacingcarManager;
