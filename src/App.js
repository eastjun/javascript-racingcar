const CarManager = require('./CarManager');

const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validator = require('./utils/Validator');

class App {
  #carManager;

  play() {
    this.startWithInitialInputs();
  }

  startWithInitialInputs() {
    InputView.readCarNames((carNamesInput) => {
      if (this.isValidInput('carNames', carNamesInput, Validator)) {
        this.inputTryCount(carNamesInput);
        return;
      }

      this.startWithInitialInputs();
    });
  }

  inputTryCount(carNamesInput) {
    InputView.readTryCount((tryCountsInput) => {
      if (this.isValidInput('tryCounts', tryCountsInput, Validator)) {
        this.#carManager = new CarManager(carNamesInput.split(','));
        this.#carManager.startRace(parseInt(tryCountsInput));
        return;
      }

      this.inputTryCount(carNamesInput);
    });
  }

  isValidInput(type, inputValue, validator) {
    try {
      if (type === 'carNames') validator.validateNameInput(inputValue);
      if (type === 'tryCounts') validator.validateTryCountsInput(inputValue);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error.message);
      return false;
    }
  }

  static printRaceProgress(cars) {
    OutputView.printRaceProgress(cars);
  }

  static printWinners(winners) {
    OutputView.printWinners(winners);
  }
}

module.exports = App;
