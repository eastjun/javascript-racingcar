//@ts-check
import { CONFIG } from '../constants/config.js';
import { INPUT } from '../constants/messages.js';
import { tryCatch } from '../utils/tryCatch.js';
import { splitStringToArray } from '../utils/utils.js';
import attemptsValidator from '../validator/AttemptsValidator.js';
import {
  carNameValidator,
  checkDuplicatedCarName,
} from '../validator/CarNameValidator.js';

import readLineAsync from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

async function setCarNames() {
  const input = await readLineAsync(INPUT.CAR_NAMES);
  const carNames = splitStringToArray(input, CONFIG.COMMA);
  carNames.forEach((carName) => {
    carNameValidator(carName);
  });
  checkDuplicatedCarName(carNames);
  return carNames;
}

async function readCarNames() {
  while (true) {
    const [error, carNames] = await tryCatch(setCarNames());

    if (error) {
      OutputView.printErrorMessage(error);
      continue;
    }

    return carNames;
  }
}

async function setAttempts() {
  const attempts = await readLineAsync(INPUT.ATTEMPTS);
  attemptsValidator(Number(attempts));
  return attempts;
}

async function readAttempts() {
  while (true) {
    const [error, attempts] = await tryCatch(setAttempts());

    if (error) {
      OutputView.printErrorMessage(error);
      continue;
    }

    return attempts;
  }
}

export { readCarNames, readAttempts };
