import {
  CAR_MAX_COUNT,
  ERROR_MESSAGE,
  MAX_ATTEMPT,
  MIN_ATTEMPT,
} from "../config/constants.js";

export const validateCars = (cars, carNames) => {
  if (cars.length > CAR_MAX_COUNT) throw Error(ERROR_MESSAGE.CAR_MAX_COUNT);
  if (carNames.length !== new Set(carNames).size)
    throw Error(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
};

export const validateAttempt = (attempt) => {
  if (Number.isNaN(attempt)) throw Error(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
  if (attempt < MIN_ATTEMPT) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  if (attempt > MAX_ATTEMPT) throw Error(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
};
