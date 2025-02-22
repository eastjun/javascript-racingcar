import { SEPARATE_STANDARD } from '../constants/MAGIC_NUMBER.js';
import { readLineAsync } from '../utils/readLineAsync.js';

class InputView {
  static async inputCarName() {
    return await readLineAsync(`경주할 자동차 이름을 입력하세요(이름은 쉼표(${SEPARATE_STANDARD})를 기준으로 구분).\n`);
  }

  static async inputTryCount() {
    return await readLineAsync('\n시도할 횟수는 몇 회인가요?\n');
  }
}

export default InputView;
