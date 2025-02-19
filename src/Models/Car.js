import { MIN_FORWARD_NUMBER } from '../constants/common.js';
import Validate from './Validate.js';

class Car {
  #position = 0;
  #history = [];

  constructor(name, names) {
    Validate.checkIsEmpty(name);
    Validate.checkCarNameLength(name);
    Validate.checkCarCount(names);
    Validate.checkCarNameDuplicate(names);
    this.name = name;
  }

  getPosition() {
    return this.#position;
  }

  setPosition(position) {
    this.#position = position;
  }

  getHistory(index) {
    if (index) {
      return this.#history[index];
    } else {
      return this.#history;
    }
  }

  movePosition(randomNumber) {
    if (this.canMove(randomNumber)) {
      this.#position += 1;
      this.#history.push(this.#position);
    } else {
      this.#history.push(this.#position);
    }
  }

  canMove(randomNumber) {
    return randomNumber >= MIN_FORWARD_NUMBER;
  }
}

export default Car;
