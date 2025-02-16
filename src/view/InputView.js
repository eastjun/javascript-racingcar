import readline from "readline";
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

const MESSAGE = {
  READ_CAR_NAME: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  READ_ATTEMPTS: '시도할 횟수는 몇 회인가요?\n'
}
async function readCarNames() {
  return await readLineAsync(MESSAGE.READ_CAR_NAME);
}

async function readAttempts() {
  return await readLineAsync(MESSAGE.READ_ATTEMPTS);
}

const InputView = {
  readCarNames,
  readAttempts
};

export default InputView;
