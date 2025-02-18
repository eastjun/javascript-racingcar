import { INPUT_MESSAGE } from "../constants/Constants.js";
import InputParser from "../input/InputParser.js";
import readLineAsync from "../utils/readLineAsync.js";

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
};

export default InputView;
