import readline from "readline";
import { INPUT_MESSAGE } from './constants.js';

function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error("arguments must be 1"));
    }

    if (typeof query !== "string") {
      reject(new Error("query must be string"));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

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
