import Car from './Car.js';
import {
  ERROR_MESSAGE,
  SELECTOR,
  RACING_COUNT_RANGE,
  CAR_NAME_LENGTH_RANGE,
  DELIMETER,
} from './constants.js';
import template from './templates.js';
import { $, $all, splitString, trimStringArray } from './utils.js';

export default class RacingCarGame {
  constructor() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.carList = [];
    this.winners = [];
  }

  racingCountInputVisibiled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).style.display = 'block';
  }

  submitCarNames() {
    const carNameList = trimStringArray(
      splitString(this.$carNameInput.value, DELIMETER)
    );

    if (
      this.validateCarNameList(carNameList) ||
      this.validateUniqueCarName(carNameList)
    ) {
      return;
    }

    this.carList = carNameList.map((name) => new Car(name));
    this.racingCountInputVisibiled();
    this.renderRacingResult();
  }

  startRace(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.carList.forEach((car) => car.race());
      this.renderRacingResult();
    }
  }

  getWinners() {
    const maxDistance = Math.max(...this.carList.map((car) => car.distance));
    this.winners = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((winner) => winner.name);
  }

  restart() {
    this.$carNameInput.value = '';
    this.$racingCountInput.value = '';
    this.$carNameInput.focus();

    this.carList = [];
    this.winners = [];

    this.renderRacingResult();
    this.renderResult();
  }

  isValidCarNamesLength(carNameList) {
    return carNameList.every(
      (name) =>
        name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
        name.length <= CAR_NAME_LENGTH_RANGE.MAX
    );
  }

  isDuplicatedCarName(carNameList) {
    return carNameList.length !== new Set(carNameList).size;
  }

  isValidRacingCount(racingCount) {
    return (
      Number.isInteger(racingCount) &&
      racingCount >= RACING_COUNT_RANGE.MIN &&
      racingCount < RACING_COUNT_RANGE.MAX
    );
  }

  alertErrorMessage(message) {
    alert(message);
  }

  validateCarNameList(carNameList) {
    if (!this.isValidCarNamesLength(carNameList)) {
      this.alertErrorMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.initializeInput(this.$carNameInput);

      return true;
    }

    return false;
  }

  validateUniqueCarName(carNameList) {
    if (this.isDuplicatedCarName(carNameList)) {
      this.alertErrorMessage(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.initializeInput(this.$carNameInput);

      return true;
    }

    return false;
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  renderRacingResult() {
    $(SELECTOR.$RACING_RESULT).innerHTML = template.renderRacingResult(
      this.carList
    );
  }

  renderResult() {
    $(SELECTOR.$RESULT).innerHTML = template.renderResult(this.winners);
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  submitRacingCount() {
    const racingCount = this.$racingCountInput.valueAsNumber;

    if (!this.isValidRacingCount(racingCount)) {
      this.alertErrorMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.initializeInput(this.$racingCountInput);

      return;
    }

    this.startRace(racingCount);
    this.getWinners();
    this.renderResult();
  }

  bindEventListners() {
    this.bindEventListener(
      'click',
      SELECTOR.$CAR_NAME_BUTTON,
      this.submitCarNames.bind(this)
    );

    this.bindEventListener(
      'click',
      SELECTOR.$RACING_COUNT_BUTTON,
      this.submitRacingCount.bind(this)
    );

    this.bindEventListener(
      'click',
      SELECTOR.$RESTART_BUTTON,
      this.restart.bind(this)
    );
  }

  init() {
    this.bindEventListners();
  }
}
