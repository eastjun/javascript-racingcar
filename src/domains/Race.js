import getRandomNumber from "../utils/getRandomNumber.js";

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  /**
   * 전체 경주 실행 및 전체 라운드 결과 반환
   * @param {number} tryCount
   * @returns {Array<Array<{ name: string, count: number }>>}
   */
  playRace(tryCount) {
    return Array.from({ length: tryCount }, () => this.#playRound());
  }

  /**
   * 각 라운드 실행 및 각 라운드 결과 반환
   * @returns {Array<{name: string, count: number }>}
   */
  #playRound() {
    return this.#cars.map((car) => {
      car.move(getRandomNumber(0, 9));
      return { name: car.name, count: car.count };
    });
  }

  getWinners() {
    const maxCount = this.#getMaxCount();
    const winners = this.#cars.filter((car) => car.count === maxCount);
    return winners.map((winner) => winner.name);
  }

  #getMaxCount() {
    const countArray = this.#cars.map((car) => car.count);
    return Math.max(...countArray);
  }
}

export default Race;
