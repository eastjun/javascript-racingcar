import RacingGame from './models/RacingGame.js';
import RacingGameView from './views/RacingGameView.js';
import nameStringToArray from './utils/nameStringToArray.js';
import { $ } from './utils/elementSeletor.js';
import SELECTOR from './constants/selector.js';
import NUMBER from './constants/number.js';
import delay from './utils/delay.js';
import {
  isCarNameInputValid,
  isRaceTimeValid,
  displayCongratuation,
} from './racingGameHelper.js';

class App {
  constructor() {
    this.View = new RacingGameView();
    this.RacingGame = new RacingGame();

    this.bindDefaultEvent();
    this.init();
  }

  init() {
    this.RacingGame.init();
  }

  bindDefaultEvent() {
    $(SELECTOR.CAR_NAME_BUTTON).addEventListener(
      'click',
      this.handleCarNameInput.bind(this)
    );

    $(SELECTOR.RACE_TIME_BUTTON).addEventListener(
      'click',
      this.handleRaceTimeInput.bind(this)
    );

    $(SELECTOR.RACE_REPLAY_BUTTON).addEventListener(
      'click',
      this.handleReplayGame.bind(this)
    );
  }

  handleCarNameInput(event) {
    event.preventDefault();

    const carNameValue = $(SELECTOR.CAR_NAME_INPUT).value;
    if (!isCarNameInputValid(carNameValue)) {
      return false;
    }

    this.View.setDisableForm($(SELECTOR.CAR_NAME_FORM));
    this.View.setAbleForm($(SELECTOR.RACE_TIME_FORM));
    this.RacingGame.generateCar(nameStringToArray(carNameValue));

    return true;
  }

  handleRaceTimeInput(event) {
    event.preventDefault();

    const raceTimeValue = $(SELECTOR.RACE_TIME_INPUT).value;
    if (!isRaceTimeValid(raceTimeValue)) {
      return false;
    }

    this.View.setDisableForm($(SELECTOR.RACE_TIME_FORM));
    this.RacingGame.round = raceTimeValue;
    this.handleGamePlay(event);

    return false;
  }

  async handleGamePlay(event) {
    event.preventDefault();

    // 박스 생성
    this.RacingGame.carList.forEach((instance) => {
      const { name } = instance.state;
      this.View.renderAdvanceDiv(name);
    });

    this.handleProgressDisplay();

    // 라운드만큼 반복
    for (
      let currentRound = 1;
      currentRound <= this.RacingGame.round;
      currentRound += 1
    ) {
      await this.progressRound();
    }

    this.handleWinnerDisplay();
  }

  handleProgressDisplay() {
    this.View.renderProgress();
  }

  async handleWinnerDisplay() {
    this.RacingGame.setWinner();
    this.View.renderResult(this.RacingGame.winner);
    this.View.renderReplayButton();
    await delay(NUMBER.ALERT_DISPLAY_TIME);
    displayCongratuation(this.RacingGame.winner);
  }

  handleReplayGame() {
    this.View.renderInit();
    this.RacingGame.init();
  }

  async progressRound() {
    this.View.LoadingStart();
    await delay(NUMBER.PROCESS_ROUND_TIME);
    this.View.LoadingEnd();

    this.RacingGame.processRound().forEach((name) =>
      this.View.renderAdvance(name)
    );
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
