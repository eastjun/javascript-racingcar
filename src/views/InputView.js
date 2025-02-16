import readline from 'readline';
import InputHandler from '../utils/InputHandler.js';
import MESSAGE from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';
import Validator from '../utils/Validator.js';

const InputView = {
  readLineAsync(query) {
    return new Promise((resolve, reject) => {
      if (arguments.length !== 1) {
        reject(new Error('arguments must be 1'));
      }

      if (typeof query !== 'string') {
        reject(new Error('query must be string'));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, input => {
        rl.close();
        resolve(input);
      });
    });
  },

  async inputName() {
    return InputHandler.getValidInput(MESSAGE.INPUT.NAME, Parser.splitName, Validator.validateInputNames, 'INPUT_NAME');
  },

  async inputTryNumber() {
    return InputHandler.getValidInput(MESSAGE.INPUT.TRY_NUMBER, Parser.toNumber, Validator.validateInputTryNumber, 'INPUT_TRY_NUMBER');
  },
};

export default InputView;
