import { INPUT_MESSAGE } from './constants.js';
import { readLineAsync } from '../util/readLineAsync.js';

async function readCarNames() {
  return await readLineAsync(INPUT_MESSAGE.READ_CAR_NAME);
}

async function readAttempts() {
  return await readLineAsync(INPUT_MESSAGE.READ_ATTEMPTS);
}

const InputView = {
  readCarNames,
  readAttempts
};

export default InputView;
