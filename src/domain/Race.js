import Car from "./Car.js";
import { RANDOM_NUMBER } from "../constants/Constants.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";

class Race {
  #carList = [];

  constructor(nameList, attemptCount) {
    this.#carList = nameList.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  executeRace() {
    const raceResult = [];
    for (let i = 0; i < this.attemptCount; i++) {
      this.executeTurn();
      raceResult.push(this.getTurnResult());
    }

    return raceResult;
  }

  executeTurn() {
    this.#carList.forEach((car) => {
      const randomNumber = getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
      car.move(randomNumber);
    });
  }

  getTurnResult() {
    return this.#carList.map((car) => ({ name: car.name, position: car.position }));
  }

  getWinnerName() {
    const winnerPosition = Math.max(...this.#carList.map((car) => car.position));
    return this.#carList.filter((car) => car.position === winnerPosition).map((car) => car.name);
  }

  play() {
    const raceResult = this.executeRace();
    const winners = this.getWinnerName();
    return { raceResult, winners };
  }

  get carList() {
    return this.#carList;
  }
}

export default Race;
