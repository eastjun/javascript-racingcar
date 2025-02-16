class WinnerManager {
  #carList;
  #maxPosition;

  constructor(carList) {
    this.#carList = carList;
    this.#maxPosition = this.#getMaxPosition();
  }

  #getMaxPosition() {
    return Math.max(...this.#carList.map(car => car.position));
  }

  getWinners() {
    return this.#carList.filter(car => car.position === this.#maxPosition).map(car => car.name);
  }
}

export default WinnerManager;
