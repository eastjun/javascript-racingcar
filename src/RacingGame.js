import RacingCars from './RacingCars.js';
import View from './View.js';
import {
    validationCarNames, validationTryCount,
} from './utils/validation.js';
import { $, userInputValue } from './utils/util.js';
import { KEYCODE_ENTER } from './constants/constant.js';
import SELECTOR from './constants/selectors.js';

export default class RacingGame {
    constructor() {
        this.racingCars = new RacingCars();
        this.view = new View();
    }

    initialize() {
        this.setClickEvent();
        this.setKeyDownEnterEvent();
    }

    setClickEvent() {
        $(SELECTOR.CAR_NAME_SUBMIT_BUTTON).addEventListener('click', () => { this.onSubmitCarName(); });
        $(SELECTOR.TRY_COUNT_SUBMIT_BUTTON).addEventListener('click', () => { this.onSubmitTryCount(); });
        $(SELECTOR.RESTART_BUTTON).addEventListener('click', () => { this.onClickRestartButton(); });
    }

    setKeyDownEnterEvent() {
        $(SELECTOR.CAR_NAME_INPUT).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitCarName();
            }
        });
        $(SELECTOR.TRY_COUNT_INPUT).addEventListener('keydown', (event) => {
            if (event.keyCode === KEYCODE_ENTER) {
                event.preventDefault();
                this.onSubmitTryCount();
            }
        });
    }

    onSubmitCarName() {
        const carNames = userInputValue.carNames();
        try {
            validationCarNames(carNames);
        } catch (error) {
            alert(error.message);
            return;
        }
        this.racingCars.reset();
        this.racingCars.initialize(carNames);
        this.view.showTryForm();
    }

    onSubmitTryCount() {
        const tryCount = userInputValue.tryCount();
        try {
            validationTryCount(tryCount);
        } catch (error) {
            alert(error.message);
            return;
        }
        this.playGame(tryCount);
        this.racingCars.resetSteps();
    }

    onClickRestartButton() {
        this.racingCars.reset();
        this.view.reset();
        userInputValue.reset();
    }

    waitForTurnLoading() {
        this.view.updateLoading();
        this.racingCars.playTurn();
    }

    endGame() {
        this.view.showFinalResult(this.racingCars.getWinners());
    }

    playTurns(turnCount) {
        let currentTurnNumber = 0;
        this.waitForTurnLoading();
        const turnTimerID = setInterval(() => {
            if (currentTurnNumber + 1 === turnCount) {
                clearInterval(turnTimerID);
                this.endGame();
            }
            this.view.updateProgress(this.racingCars.cars);
            if (currentTurnNumber + 1 < turnCount) this.waitForTurnLoading();
            currentTurnNumber += 1;
        }, 1000);
    }

    playGame(turnCount) {
        this.view.showTrackSection(this.racingCars.cars);
        this.playTurns(turnCount);
    }
}
