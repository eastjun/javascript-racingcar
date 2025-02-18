import { MOVE_THRESHOLD } from "../constants.js";
import { canMove } from "./util/move.js";

class Car {
  #name = "";
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number, steps) {
    if (canMove(number)) {
      this.#position += steps;
    }
  }
}

export default Car;
