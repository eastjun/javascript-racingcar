import { RacingGame, Car } from '../model/index.js';
import { RacingGameView } from '../view/index.js';
import { InputValidator } from '../utils/index.js';
import { ALERT_RESTART } from '../constants/index.js';

export default class RacingGameController {
  constructor() {
    this.racingGame = new RacingGame();
    this.view = new RacingGameView();
    this.racingGame.reset();
    this.view.reset();
    this.setEvent();
  }

  setEvent() {
    document
      .querySelector('.name-container')
      .addEventListener('click', this.handleClickNameBtn.bind(this));
    document
      .querySelector('.count-container')
      .addEventListener('click', this.handleClickCountBtn.bind(this));
    document
      .querySelector('.result-container')
      .addEventListener('click', this.handleClickResetBtn.bind(this));
  }

  handleClickNameBtn({ target: { classList } }) {
    if (!classList.contains('car-name-btn')) {
      return;
    }

    if (this.racingGame.isEnd) {
      alert(ALERT_RESTART);
      return;
    }

    this.getCarNameInput();
  }

  getCarNameInput() {
    const $input = document.querySelector('.car-name-input');
    const validator = new InputValidator();
    try {
      validator.checkNameInput($input.value);
      const carNames = $input.value.split(',');
      this.racingGame.setCars(carNames.map(carName => new Car(carName)));
      this.view.renderCountInput();
    } catch (error) {
      this.handleInputException($input, error.message);
    }
  }

  handleInputException($input, message) {
    $input.value = '';
    alert(message);
  }

  handleClickCountBtn({ target: { classList } }) {
    if (!classList.contains('count-btn')) {
      return;
    }

    if (this.racingGame.isEnd) {
      alert(ALERT_RESTART);
      return;
    }

    this.getCountInput();
    this.racingGame.count > 0 && this.racingGame.runGame();
    this.view.renderProgress(this.racingGame.getCars());
    this.view.renderResult(this.racingGame.getWinners());
  }

  getCountInput() {
    const $input = document.querySelector('.count-input');
    const validator = new InputValidator();
    try {
      validator.checkCountInput(Number($input.value));
      this.racingGame.setCount(Number($input.value));
    } catch (error) {
      this.handleInputException($input, error.message);
    }
  }

  handleClickResetBtn({ target: { classList } }) {
    if (!classList.contains('reset-btn')) {
      return;
    }

    this.racingGame.reset();
    this.view.reset();
  }
}
