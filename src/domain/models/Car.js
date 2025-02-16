import ERROR from '../../constants/Error.js';
import Validator from '../../utils/Validator.js';

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    const validationResults = Validator.validateCarName(name);
    if (Object.values(validationResults).some(isError => isError)) {
      throw new Error(ERROR.MESSAGE.INVALID_CAR_NAME);
    }
  }

  moveForward(randomValue) {
    if (randomValue < 4) {
      return;
    }
    this.position++;
  }
}

export default Car;
