import { CAR } from "../constants/domain.js";
import { validateCarNames } from "../utils/validation.js";

export default class Car {
  #name;
  #position;
  constructor(name, position = 0) {
    validateCarNames(name);
    this.#name = name;
    this.#position = position;
  }

  move(number) {
    if (this.canMove(number)) {
      this.#position += 1;
    }
  }

  canMove(number) {
    return number >= CAR.PROGRESS_CRITERIA;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
