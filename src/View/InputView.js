const Console = require("../utils/Console");
const { MESSAGE } = require("../utils/constants");

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.GET_CAR_NAME, callback);
  },

  readNumberOfTrial(callback) {
    Console.readLine(MESSAGE.GET_TRY_COUNT, callback);
  },
};

module.exports = InputView;
