import { INPUT_MESSAGE } from "../constants/Constants.js";
import InputParser from "../input/InputParser.js";
import readLineAsync from "../utils/readLineAsync.js";
import validateAttemptCount from "../validation/validateAttemptCount.js";
import validateCarNameList from "../validation/validateCarNameList.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readUserInput(message) {
    return await readLineAsync(message);
  },

  async getCarNameList() {
    return this.handleUserInput(INPUT_MESSAGE.CAR, InputParser.car, validateCarNameList);
  },

  async getAttemptCount() {
    return this.handleUserInput(INPUT_MESSAGE.ATTEMPT, InputParser.attempt, validateAttemptCount);
  },

  async handleUserInput(inputMessage, parser, validator) {
    while (true) {
      try {
        const userInput = await InputView.readUserInput(inputMessage);
        const parsedInput = parser(userInput);
        validator(parsedInput);
        return parsedInput;
      } catch (e) {
        OutputView.print(e.message);
      }
    }
  },
};

export default InputView;
