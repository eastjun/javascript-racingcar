import { KOREAN_AND_ENGLISH_REGEX } from "../config/constants.js";
import { ERROR_MESSAGE } from "../config/errorConstants.js";
import CarError from "../utils/error/CarError.js";

class Car {
  static NameLength = { MAX: 5, MIN: 1 };
  #name;
  #position = 0;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (name.length > Car.NameLength.MAX)
      throw new CarError(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH);
    if (name.length < Car.NameLength.MIN)
      throw new CarError(ERROR_MESSAGE.CAR_NAME_MIN_LENGTH);
    if (!KOREAN_AND_ENGLISH_REGEX.test(name))
      throw new CarError(ERROR_MESSAGE.CAR_NAME_KOREAN_AND_ENGLISH);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(condition) {
    if (condition()) ++this.#position;
  }
}

export default Car;
