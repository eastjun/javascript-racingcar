import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

const InputHandler = {
  async getValidInput(promptMessage, parser, validator) {
    let isNotValid = true;
    let parsedInput;

    while (isNotValid) {
      const input = await InputView.readLineAsync(promptMessage);
      parsedInput = parser ? parser(input) : input;

      const validationResults = validator(parsedInput);
      OutputView.printValidationResults(validationResults);
      isNotValid = Object.values(validationResults).some(value => value);
    }
    return parsedInput;
  },
};

export default InputHandler;
