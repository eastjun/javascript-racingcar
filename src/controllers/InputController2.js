import InputView from '../views/InputView.js';
import { Parser } from '../utils/Parser.js';
import Validator from '../utils/ValidationUtils.js';
import DEFINITION from '../constants/Definition.js';
import MESSAGE from '../constants/Message.js';

class InputController {
  static async inputName() {
    try {
      const inputName = await InputView.readLineAsync(MESSAGE.INPUT.NAME);
      const splitedName = Parser.splitName(inputName);
      // parser의 구분자도 인자로 받도록
      const errors = Validator.validateInputNames(splitedName, 5);
      console.log(errors);
      return splitedName;
    } catch (error) {
      console.log(error.message);
      return this.inputName();
    }
  }
}

InputController.inputName()

export default InputController;
