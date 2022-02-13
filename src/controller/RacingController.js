import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR } from '../constants/constants.js';

export default class RacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    document
      .getElementById(SELECTOR.ID.CAR_NAMES_BUTTON)
      .addEventListener('click', this.submitNameHandler.bind(this));
    document
      .getElementById(SELECTOR.ID.RACING_COUNT_SUBMIT)
      .addEventListener('click', this.submitCountHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    const nameList = this.getCarNameList();

    try {
      validateCarNames(nameList);
      this.model.players = nameList;
      this.view.deactivateNamesForm();
      this.view.activateCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = this.getRacingCount();

    try {
      validateCount(racingCount);
      this.model.round = Number(racingCount);
      this.view.deactivateNamesForm();
      this.startRacingGame();
      this.activateRestartButton();
    } catch (error) {
      alert(error.message);
    }
  }

  activateRestartButton() {
    document
      .getElementById(SELECTOR.ID.RESTART_BUTTON)
      .addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.view.reset();
    this.model.reset();
  }

  getCarNameList() {
    const nameList = document
      .getElementById(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',');
    return nameList.map((name) => name.trim());
  }

  getRacingCount() {
    return document.getElementById(SELECTOR.ID.RACING_COUNT_INPUT).value;
  }

  startRacingGame() {
    while (this.model.round) {
      this.model.goToNextTurn();
    }
    this.view.deactivateCountForm();
    this.view.renderProgress(this.model.cars);
    this.view.renderResult(this.model.winners);
  }
}
