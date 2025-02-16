import { INPUT_MESSAGE } from "../config/ioconstans.js";
import { validateAttempt } from "../utils/validate.js";
import readLineAsync from "./input.js";

export const getCarNames = async () => {
  return (await readLineAsync(INPUT_MESSAGE.CAR_NAME_INPUT)).trim();
};

export const getAttempt = async () => {
  while (true) {
    try {
      const attempt = Number(
        (await readLineAsync(INPUT_MESSAGE.ATTEMPT_INPUT)).trim()
      );
      validateAttempt(attempt);
      return attempt;
    } catch (error) {
      console.log(error.message);
    }
  }
};
