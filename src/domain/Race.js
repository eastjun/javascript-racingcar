import { RANDOM_RANGE_END, RANDOM_RANGE_START } from "../constant/constant.js";
import generateRandomNumber from "../utils/generateRandomNumber.js";

class Race {
  #carsInstance = [];
  #tryCount = 0;
  #raceResults = [];

  constructor(carsInstance, tryCount) {
    this.#carsInstance = carsInstance;
    this.#tryCount = tryCount;
  }

  raceStart() {
    for (let i = 1; i <= this.#tryCount; i++) {
      this.#raceResults.push(this.#playRound());
    }
    return this.#raceResults;
  }

  getWinners() {
    const maxCount = this.#getMaxCount();
    const winners = this.#getWinnersCount(maxCount);
    return this.#extractWinnerNames(winners);
  }

  #playRound() {
    this.#carsInstance.forEach((carInstance) => {
      carInstance.move(generateRandomNumber(RANDOM_RANGE_START, RANDOM_RANGE_END));
    });
    return this.#carsInstance.map((car) => ({
      name: car.name,
      count: car.count,
    }));
  }

  #getMaxCount() {
    const countArray = this.#carsInstance.map((carInstance) => carInstance.count);
    return Math.max(...countArray);
  }

  #getWinnersCount(maxCount) {
    return this.#carsInstance.filter((carInstance) => carInstance.count === maxCount);
  }

  #extractWinnerNames(winnersInstance) {
    return winnersInstance.map((winnerInstance) => winnerInstance.name);
  }
}

export default Race;
