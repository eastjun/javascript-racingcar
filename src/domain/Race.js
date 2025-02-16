import Car from "./Car.js";
import { MOVE_CONDITION, RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";

class Race {
  #carList = [];

  constructor(nameList, attemptCount) {
    this.#carList = nameList.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  executeTurn() {
    this.#carList.forEach((car) => {
      const randomNumber = getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
      if (randomNumber >= MOVE_CONDITION) {
        car.move(randomNumber);
      }
    });
  }

  getWinnerName() {
    const winnerPosition = Math.max(...this.#carList.map((car) => car.position));
    return this.#carList.filter((car) => car.position === winnerPosition).map((car) => car.name);
  }

  play() {
    const raceResult = [];

    for (let i = 0; i < this.attemptCount; i++) {
      this.executeTurn();
      raceResult.push([...this.#carList]);
    }

    const winners = this.getWinnerName();
    return { raceResult, winners };
  }
}

export default Race;
