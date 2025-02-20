import Car from './Car.js';
import { getRandomNumber } from '../util/random.js';

function createCars(carNames) {
    return carNames.map(name => new Car(name));
}

function oneRound(cars) {
    cars.forEach(car => {
        car.move(getRandomNumber(0, 10));
    });
    return cars;
}

function getMaxPosition(cars) {
    const hasMaxPositionCar = cars.reduce((prev, value) => {
        if (prev.position >= value.position) {
            return prev;
        } else {
            return value;
        }
    });
    return hasMaxPositionCar.position;
}

function getWinners(cars) {
    const maxPosition = getMaxPosition(cars);
    const winners = [];
    cars.forEach(car => {
        if (car.position === maxPosition) {
            winners.push(car.name);
        }
    });
    return winners;
}

const RacingCar = {
    createCars,
    oneRound,
    getWinners,
}

export default RacingCar;
