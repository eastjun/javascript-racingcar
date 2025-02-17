import validateCarName from '../validation/validate/validateCarName.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
    this.#validate();
  }

  #validate() {
    validateCarName(this.#name);
  }

  move() {
    this.#position++;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
