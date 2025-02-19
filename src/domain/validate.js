import { ERROR_MESSAGE, CAR, ATTEMPT } from "../constants.js";
import { getCarNames, getAttempt } from "../ui/InputHandler.js"
import { DELIMITERS } from "../constants.js";

export const validateCarCount = (carNames) => {
  if (carNames.length < CAR.MIN_COUNT) throw Error(ERROR_MESSAGE.TOO_FEW_CARS);
  if (carNames.length > CAR.MAX_COUNT) throw Error(ERROR_MESSAGE.TOO_MANY_CARS);
}

export const validateCarNames = (carNames) => {
  if (carNames.some(name => name.length == 0)) throw new Error(ERROR_MESSAGE.CAR_NAME_TOO_SHORT);
  if (carNames.some(name => name.length > CAR.MAX_NAME_LENGTH)) throw new Error(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
  if (carNames.length !== new Set(carNames).size) throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

export const validateAttempt = (attempt) => {
  if (Number.isNaN(attempt)) throw Error(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
  else if (!Number.isInteger(attempt)) throw Error(ERROR_MESSAGE.ATTEMPT_NUMBER_IS_NOT_INTEGER);
  else if (attempt < ATTEMPT.MIN) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  else if (attempt > ATTEMPT.MAX) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
};

const parseCarNames = (input) => {
  return input.split(DELIMITERS.CAR_NAME).map((name) => name.trim());
};

export const getValidCarNames = async () => {
  while (true) {
    try {
      const carNames = parseCarNames(await getCarNames());
      validateCarCount(carNames);
      validateCarNames(carNames);
      return carNames;
    } catch (error) {
      console.log(error.message);
    }
  }
};

export const getValidAttempt = async () => {
  while (true) {
    try {
      const attempt = await getAttempt();
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};