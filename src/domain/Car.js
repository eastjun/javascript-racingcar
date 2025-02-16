import {
  MOVE_THRESHOLD,
  ERROR_MESSAGE,
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_MIN_LENGTH,
  KOREAN_AND_ENGLISH_REGEX,
} from "../config/constants.js";

class Car {
  #name = "";
  #position = 0;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (name.length > CAR_NAME_MAX_LENGTH)
      throw Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH);
    if (name.length < CAR_NAME_MIN_LENGTH)
      throw Error(ERROR_MESSAGE.CAR_NAME_MIN_LENGTH);
    if (KOREAN_AND_ENGLISH_REGEX.test(name))
      throw Error(ERROR_MESSAGE.CAR_NAME_KOREAN_AND_ENGLISH);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number) {
    if (number >= MOVE_THRESHOLD) ++this.#position;
  }
}

export default Car;
