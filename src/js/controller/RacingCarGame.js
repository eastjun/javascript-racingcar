import Car from '../model/Car.js';
import template from '../templates.js';
import { ERROR_MESSAGE, DELIMETER } from '../constants.js';
import { splitString, trimStringArray } from '../utils/utils.js';
import {
  isValidCarNamesLength,
  isDuplicatedCarName,
  isValidRacingCount,
} from '../utils/validations.js';

export default class RacingCarGame {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindClickCarNameButton(this.submitCarNames.bind(this));
    this.view.bindClickRacingCountButton(this.submitRacingCount.bind(this));
    this.view.bindClickRestartButton(this.init.bind(this));
  }

  validateCarNameList(carNameList) {
    if (!isValidCarNamesLength(carNameList)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  validateUniqueCarName(carNameList) {
    if (isDuplicatedCarName(carNameList)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.view.initializeInput(this.view.carNameInput);

      return true;
    }

    return false;
  }

  submitCarNames() {
    const carNameList = trimStringArray(
      splitString(this.view.carNameInput.value, DELIMETER)
    );

    if (
      this.validateCarNameList(carNameList) ||
      this.validateUniqueCarName(carNameList)
    ) {
      return;
    }

    this.model.carList = carNameList.map((name) => new Car(name));
    this.view.racingCountInputVisibled();
    this.view.render(
      this.view.racingProgress,
      template.renderRacingProgress(this.model.carList)
    );
  }

  startRace(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.model.carList.forEach((car) => car.race());
      this.view.render(
        this.view.racingProgress,
        template.renderRacingProgress(this.model.carList)
      );
    }
  }

  submitRacingCount() {
    const racingCount = this.view.racingCountInput.valueAsNumber;

    if (!isValidRacingCount(racingCount)) {
      this.view.alertErrorMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.view.initializeInput(this.view.racingCountInput);

      return;
    }

    this.startRace(racingCount);
    this.view.render(
      this.view.racingResult,
      template.renderRacingResult(this.model.winners)
    );
  }

  init() {
    this.view.carNameInput.value = '';
    this.view.racingCountInput.value = '';
    this.view.carNameInput.focus();
    this.view.racingCountInputInvisibled();

    this.model.carList = [];
    this.model.winners = [];

    this.view.render(this.view.racingProgress, '');
    this.view.render(this.view.racingResult, '');
  }
}
