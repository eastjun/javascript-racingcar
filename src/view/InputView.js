import { ErrorMessages, Messages } from '../constants/Messages';
import AppError from '../errors/AppError';
import Console from '../utils/Console';
import OutputView from './OutputView';

const InputView = {
  async readCarNames() {
    return InputView.repeat(async () => {
      const carnamesString = await Console.readline(Messages.READ_CAR_NAMES);
      const carNames = carnamesString.split(',');

      InputView.validateCarNames(carNames);
      return carNames;
    });
  },

  validateCarNames(carNames) {
    const isEveryCarNameValid = carNames.every((carName) => carName.length <= 5);
    if (!isEveryCarNameValid) {
      throw new AppError(ErrorMessages.CAR_NAME_LENGTH_LIMIT, 5);
    }
  },

  readRaceStep() {
    return InputView.repeat(async () => {
      const raceStepString = await Console.readline(Messages.READ_RACE_STEP);
      const raceStep = Number(raceStepString);

      InputView.validateRaceStep(raceStep);

      return raceStep;
    });
  },

  validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) {
      throw new AppError(ErrorMessages.RACE_STEP_NOT_INTEGER);
    }
    if (raceStep <= 0) {
      throw new AppError(ErrorMessages.RACE_STEP_NOT_POSITIVE);
    }
  },

  async repeat(fn) {
    try {
      const answer = await fn();
      return answer;
    } catch (error) {
      OutputView.printError(error);
      return InputView.repeat(fn);
    }
  },
};

export default InputView;
