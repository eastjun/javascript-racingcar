import { INPUT_MESSAGE } from '../Const.js';
import Output from './Output.js';
import readLineAsync from '../ReadLineAsync.js';
import { validateRaceCarNames } from './validators/RaceCarNameValidator.js';
import { validateRaceCount } from './validators/RaceCount.js';

const getSeparatedCarNames = async () => {
  const raceCarName = await readLineAsync(
    INPUT_MESSAGE.raceCarNames + Output.printNewLine()
  );
  return raceCarName.split(',');
};

const getNumericRaceCount = async () => {
  return Number(
    await readLineAsync(INPUT_MESSAGE.raceCount + Output.printNewLine())
  );
};

const getValidRaceCarNames = async () => {
  try {
    const raceCarNames = await getSeparatedCarNames();
    raceCarNames.forEach((raceCarName) => {
      validateRaceCarNames(raceCarName);
    });

    return raceCarNames;
  } catch (e) {
    Output.printLine(e.message);
    return await this.raceCarNames();
  }
};

const getValidRaceCount = async () => {
  try {
    const raceCount = await getNumericRaceCount();
    validateRaceCount(raceCount);

    return raceCount;
  } catch (e) {
    Output.printLine(e.message);
    return await this.raceCount();
  }
};

export { getValidRaceCarNames, getValidRaceCount };
