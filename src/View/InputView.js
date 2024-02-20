import readLine from 'readline';
import { SYMBOL, VIEW_MESSAGES } from '../constanst';

const { PROMPT_CAR_NAMES, PROMPT_TRY } = VIEW_MESSAGES;
const { DIVIDE_SYMBOL } = SYMBOL;

const InputView = (() => {
  const STD_OBJ = Object.freeze({
    input: process.stdin,
    output: process.stdout,
  });

  const readLineAsync = (prompt) => {
    const rl = readLine.createInterface(STD_OBJ);
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  };

  return {
    readCars: async () => {
      const carsName = await readLineAsync(PROMPT_CAR_NAMES);
      return carsName.split(DIVIDE_SYMBOL).map((name) => name.trim());
    },
    readTry: async () => {
      const tryNums = await readLineAsync(PROMPT_TRY);

      return tryNums;
    },
  };
})();

export default InputView;
