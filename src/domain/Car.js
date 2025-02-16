import { MOVE_CONDITION } from "../constants/Constants.js";
import OutputView from "../views/OutputView.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(condition) {
    if (condition >= MOVE_CONDITION) {
      this.#position++;
    }
  }

  printStatus() {
    OutputView.print(`${this.name} : ${"-".repeat(this.position)}`);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
