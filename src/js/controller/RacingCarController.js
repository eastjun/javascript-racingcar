import RacingCarModel from '../models/RacingCarModel.js';
import CarNamesInputView from '../view/CarNamesInputView.js';
import CountInputView from '../view/CountInputView.js';
import ResultView from '../view/ResultView.js';
import WinnerView from '../view/WinnerView.js';

import { $ } from '../utils/selector.js';
import { CUSTOM_EVENT, ID } from '../utils/constants.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.CarNamesInputView = new CarNamesInputView($(`#${ID.CAR_NAMES_SECTION}`))
      .setup()
      .on(CUSTOM_EVENT.SUBMIT_CAR_NAMES, (e) => this.submitCarNamesHandler(e.detail));
    this.CountInputView = new CountInputView($(`#${ID.RACING_COUNT_SECTION}`))
      .setup()
      .on(CUSTOM_EVENT.SUBMIT_RACING_COUNT, (e) => this.submitRacingCountHandler(e.detail));
    this.ResultView = new ResultView($(`#${ID.RESULT}`));
    this.WinnerView = new WinnerView($(`#${ID.RESULT}`))
      .setup()
      .on(CUSTOM_EVENT.CLICK_REPLAY_BUTTON, this.clickReplayButtonHandler);
  }

  submitCarNamesHandler = (carNames) => {
    try {
      this.model.setCars(carNames);
      this.CarNamesInputView.disableCarNamesInput();
      this.CountInputView.enableCountInput();
    } catch (err) {
      alert(err);
    }
  };

  submitRacingCountHandler = (racingCount) => {
    try {
      this.model.setRacingCount(racingCount);
      this.playGame();
      this.CarNamesInputView.disableCarNamesInput();
      this.CountInputView.disableCountInput();
    } catch (err) {
      alert(err);
    }
  };

  playGame = async () => {
    this.model.initPrevRaceResult();
    this.ResultView.renderCarNames(this.model.getCarsName());
    for (let i = 0; i < this.model.getRacingCount(); i += 1) {
      const prevRaceResult = this.model.getPrevRaceResult();
      await this.model.racePerSecond();
      const currentRaceResult = this.model.getCurrentRacingResult(prevRaceResult);
      this.ResultView.renderArrows(currentRaceResult);
    }
    this.endGame();
  };

  endGame = () => {
    this.ResultView.removeSpinners();
    const winners = this.model.pickWinners();
    this.WinnerView.renderWinners(winners);
    this.WinnerView.renderReplayButton();
  };

  clickReplayButtonHandler = () => {
    this.model.resetGameStatus();
    this.replayGame();
  };

  replayGame = () => {
    [this.CarNamesInputView, this.CountInputView, this.ResultView].forEach((view) => {
      view.reset();
    });
    this.CarNamesInputView.enableCarNamesInput();
  };
}
