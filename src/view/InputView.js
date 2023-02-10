const Console = require('../utils/Console');

const InputView = {
  readCarNames() {
    return Console.readLine(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
    );
  },

  readTryCount() {
    return Console.readLine('시도할 회수는 몇회인가요?\n');
  },
};

module.exports = InputView;
