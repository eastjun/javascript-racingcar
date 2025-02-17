import CarValidator from "./validators/CarValidator.js";

export default class Car {
  #name;
  #position;

  static START_POSITION = 0;
  static MOVE_COUNT = 1;
  static MOVE_CONDITION = 4;

  constructor(name) {
    CarValidator.validateCarNameLength(name);
    this.#name = name;
    this.#position = Car.START_POSITION;
  }

  move(isCanMove) {
    if (isCanMove) {
      this.#position += Car.MOVE_COUNT;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
