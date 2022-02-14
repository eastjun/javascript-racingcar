import { CAR_MOVE_FORWARD_CRITERIA, CAR_MOVE_FORWARD_STEP, MAX_RANDOM_NUMBER } from '../constants/game-condition.js';
import Car from './car.js';

export default class RacingCarGameModel {
    constructor() {
        this.resetCarArray();
    }

    generateCars(carNameArray) {
        this.carArray =  carNameArray.map(carName => new Car(carName));
    }

    updateCarsSuccessCount() {
        this.carArray.forEach(car => {
            this.generateRandomNumber() >= CAR_MOVE_FORWARD_CRITERIA && car.increaseSuccessCount(CAR_MOVE_FORWARD_STEP);
        });
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * (MAX_RANDOM_NUMBER + 1));
    }

    resetCarArray() {
        this.carArray = [];
    }
}