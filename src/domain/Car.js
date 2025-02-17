import { MOVE_CONDITION, CAR_NAME_ERROR_MESSAGES } from "../constants/Constants.js";
import throwError from "../utils/throwError.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.validateName(name);
    this.#name = name;
    this.#position = 0;
  }

  move(condition) {
    if (condition >= MOVE_CONDITION) {
      this.#position++;
    }
  }

  validateName(name) {
    this.checkNameExistence(name);
    this.checkNameLength(name);
  }

  checkNameExistence(name) {
    if (this.isEmptyName(name)) {
      throwError(CAR_NAME_ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
  }

  checkNameLength(name) {
    if (!this.isValidLength(name)) {
      throwError(CAR_NAME_ERROR_MESSAGES.NAME_LENGTH);
    }
  }

  isEmptyName(name) {
    return !name || name.length === 0;
  }
  isValidLength(name) {
    return name.length <= 5 && name.length >= 1;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
