import { INFO_MESSAGE } from "../constants.js";
import readLineAsync from "./Input.js";
import { validateAttempt } from "../domain/validate.js";

export const getCarNames = async () => {
  return await readLineAsync(INFO_MESSAGE.CAR_NAME_PROMPT);
};

export const getAttempt = async () => {
  return Number(await readLineAsync(INFO_MESSAGE.ATTEMPT_PROMPT));
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
