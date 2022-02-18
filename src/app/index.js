import {
  DOM,
  ERROR_MESSAGE,
  GAME_ROUND_INTERVAL,
  MOVE_CONDITION,
  RANGE_MAX,
  RANGE_MIN,
} from '../lib/constants.js';
import { isNumberBelowZero, pickNumberInRange, selectDOM } from '../lib/utils.js';
import CarManager from './carManager.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  start() {
    this.count = null;
    this.view = new RacingCarGameView();
    this.carManager = new CarManager();
    this.initDOM();
    this.initHandler();
  }

  initDOM() {
    this.carNameInputField = selectDOM(`#${DOM.CAR_NAME_INPUT_FIELD_ID}`);
    this.countInputField = selectDOM(`#${DOM.COUNT_INPUT_FIELD_ID}`);
  }

  initHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN_ID) {
      const carNameValue = selectDOM(`#${DOM.CAR_NAME_INPUT_ID}`, carNameInputField).value;
      try {
        this.carManager.makeCars(carNameValue);
        this.view.renderCountInputForm();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN_ID) {
      const count = selectDOM(`#${DOM.COUNT_INPUT_ID}`, countInputField).value;
      try {
        this.setCount(count);
        this.simulateGame();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  setCount(count) {
    if (isNumberBelowZero(count)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.count = Number(count);
  }

  simulateGame() {
    this.view.renderGameStart(this.carManager.cars);
    this.finishedCount = 0;
    this.gameIntervalId = setInterval(this.simulateRound.bind(this), GAME_ROUND_INTERVAL);
  }

  simulateRound() {
    const moved = [];
    this.carManager.cars.forEach((car) => {
      const carMoved = RacingCarGame.processCarRandomMove(car);
      if (carMoved) moved.push(car.id);
    });
    this.finishedCount += 1;
    this.view.renderRoundResult(moved, this.count, this.finishedCount);
    if (this.finishedCount === this.count) {
      this.afterGameComplete();
    }
  }

  static processCarRandomMove(car) {
    const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (random >= MOVE_CONDITION) {
      car.goForward();
      return true;
    }
    return false;
  }

  afterGameComplete() {
    clearInterval(this.gameIntervalId);
    this.view.renderGameResults(this.getWinners());
    this.afterRenderComplete();
  }

  getWinners() {
    const max = Math.max(...this.carManager.cars.map((car) => car.progress));
    const winners = this.carManager.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      []
    );
    return winners;
  }

  afterRenderComplete() {
    this.view.disableInputButtons();

    const restartButton = selectDOM(`#${DOM.RESTART_BTN_ID}`);
    restartButton.addEventListener('click', () => window.location.reload());
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }
}
export default RacingCarGame;
