import { INPUT_MESSAGE } from "../constants/Constants.js";
import InputParser from "../input/InputParser.js";
import readLineAsync from "../utils/readLineAsync.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readUserInput(message) {
    return await readLineAsync(message);
  },

  async getCarNameList() {
    const userInput = await this.readUserInput(INPUT_MESSAGE.CAR);
    return InputParser.car(userInput);
  },

  async getAttemptCount() {
    const userInput = await this.readUserInput(INPUT_MESSAGE.ATTEMPT);
    return InputParser.attempt(userInput);
  },

  async retryOnError(asyncFn) {
    while (true) {
      try {
        return await asyncFn();
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
};

export default InputView;
