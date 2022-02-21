import { RULES, WINNER_MESSAGE } from '../constants/index.js';
import { convertToNumber } from '../util/index.js';
import RacingCarGameModel from '../model/RacingCarGameModel.js';
import RacingCarGameView from '../view/RacingCarGameView.js';
import validator from '../validator/index.js';

class RacingCarGameController {
  constructor() {
    this.view = new RacingCarGameView();
    this.model = new RacingCarGameModel();

    this.setEventHandler();
  }

  setEventHandler() {
    this.view.setCarNameFormEventHandler(this.handleCarNameFormSubmitEvent.bind(this));
    this.view.setRacingCountFormEventHandler(this.handleRacingCountFormSubmitEvent.bind(this));
    this.view.setRestartBtnEventHandler(this.handleRestartBtnClickEvent.bind(this));
  }

  handleCarNameFormSubmitEvent(carNames) {
    try {
      const carNameList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

      validator.validateCarNames(carNameList);

      this.model.setRacingCarList(carNameList);

      this.view.renderRacingCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  handleRacingCountFormSubmitEvent(racingCount) {
    try {
      validator.validateRacingCount(racingCount);

      const racingCountNumber = convertToNumber(racingCount);
      this.model.setRacingCount(racingCountNumber);

      this.view.deactivateForm();
      this.play();
    } catch (error) {
      alert(error.message);
    }
  }

  handleRestartBtnClickEvent() {
    this.model.resetGameState();
    this.view.reset();
  }

  play() {
    this.view.renderRacingCarList(this.model.getRacingCarList());
    this.startRacingGame();
  }

  startRacingGame() {
    let currentRacingCount = 1;
    const racingCount = this.model.getRacingCount();

    const raceTimer = setInterval(() => {
      if (currentRacingCount !== 1) {
        this.view.removeSpinner();
      }

      this.model.playOneGame();
      this.view.renderRacingCarProgress(this.model.getRacingCarList());

      if (currentRacingCount === racingCount) {
        clearInterval(raceTimer);
        this.handleGameResult();
        return;
      }

      this.view.renderSpinner();
      currentRacingCount += 1;
    }, RULES.TRUN_INTERVAL_TIME);
  }

  handleGameResult() {
    const finalWinner = this.model.getFinalWinner();
    this.view.renderFinalWinner(finalWinner);
    this.view.renderRestartButton();

    setTimeout(() => {
      alert(WINNER_MESSAGE(finalWinner));
    }, RULES.RESULT_MESSAGE_WAITING_TIME);
  }
}

export default RacingCarGameController;
