import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Validate from './Validate.js'
import Car from './Car.js';

class RacingcarManager {
    #validate

    constructor() {
        this.#validate = new Validate();
    }

    async start() {
        const carNames = await this.#getCarNames();
        const cars = this.createCars(carNames);
        const attempts = await this.#getAttempts();
        const raceResult = this.roundOfRacing(cars, attempts);
        const winners = this.getWinners(raceResult);
        OutputView.printWinners(winners);
    }

    async #getCarNames() {
        while (true) {
            try {
                const carNames = await InputView.readCarNames();
                this.#validateCarName(carNames);
                return carNames.split(',');
            } catch (error) {
                OutputView.printErrorMessage(error.message);
            }
        }
    }

    #validateCarName(carNames) {
        try {
            this.#validate.isEmpty(carNames);
            const carNamesList = carNames.split(',');
            carNamesList.forEach(carName => {
                this.#validate.isEmpty(carName);
                this.#validate.carCount(carNamesList);
                this.#validate.carNameLength(carName);
            });
        } catch (error) {
            throw error;
        }
    }

    createCars(carNames) {
        return carNames.map(name => new Car(name));
    }

    async #getAttempts() {
        while (true) {
            try {
                const attempts = await InputView.readAttempts();
                this.#validateAttempts(attempts);
                return Number(attempts);
            } catch (error) {
                OutputView.printErrorMessage(error.message);
            }
        }
    }

    #validateAttempts(attempts) {
        try {
            this.#validate.isEmpty(attempts);
            const numAttempts = Number(attempts);
            this.#validate.isNumber(numAttempts);
            this.#validate.isPositiveNumber(numAttempts);
            this.#validate.isInteger(numAttempts);
        } catch (error) {
            throw error;
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    oneRound(cars) {
        return cars.map(car => {
            const newCar = new Car(car.name, car.position);
            newCar.move(this.getRandomNumber());
            return newCar;
        });
    }


    roundOfRacing(cars, attempts) {
        OutputView.printResultMessage();
        let raceResult = [...cars];
        for (let i = 0; i < attempts; i++) {
            raceResult = this.oneRound(raceResult);
            OutputView.printOneRoundResult(raceResult);
        }
        return raceResult;
    }

    getMaxPosition(cars) {
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
        const maxPosition = this.getMaxPosition(cars);
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
