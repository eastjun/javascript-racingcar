import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { NUMBER } from "../constants/Number.js";

class Cars {
  #cars;

  constructor(carNames) {
    this.validateCarNames(carNames);
    this.#cars = carNames.map((name) => ({
      name: name,
      position: NUMBER.INIT_POSITION,
    }));
  }

  getWinners() {
    const maxPosition = this.getMaxPosition();
    return this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  getMaxPosition() {
    return this.#cars.reduce(
      (maxPosition, car) => Math.max(car.position, maxPosition),
      -1,
    );
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  moveCars() {
    this.#cars.forEach((car) => {
      this.#checkMoveCondition(car);
    });
  }

  #checkMoveCondition(car) {
    if (this.getRandomNumber() >= NUMBER.MIN_NUMBER_TO_MOVE) {
      car.position += NUMBER.MOVE_POSITION;
    }
  }

  getCars() {
    return [...this.#cars];
  }

  validateCarNames(carNames) {
    carNames.forEach((name) => this.#validateEachCarName(name));

    this.#validateDuplicateName(carNames);
    this.#validateCarNamesLength(carNames);
  }

  #validateEachCarName(carName) {
    this.#valiateCarNameLength(carName);
    this.#validateSpecialSymbol(carName);
  }

  #valiateCarNameLength(carName) {
    if (
      carName.length < NUMBER.MIN_CAR_NAME_LENGTH ||
      carName.length > NUMBER.MAX_CAR_NAME_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  }

  #validateSpecialSymbol(carName) {
    const regExp = /^[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]$/g;

    if (regExp.test(carName)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME);
    }
  }

  #validateCarNamesLength(carNames) {
    if (
      carNames.length < NUMBER.MIN_CAR_LIST_LENGTH ||
      carNames.length > NUMBER.MAX_CAR_LIST_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_CARS_LENGTH);
    }
  }

  #validateDuplicateName(carNames) {
    const nameSet = new Set();
    carNames.forEach((name) => {
      this.#checkDuplicate(name, nameSet);
    });
  }

  #checkDuplicate(carName, nameSet) {
    if (nameSet.has(carName)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);
    }

    nameSet.add(carName);
  }
}

export default Cars;
