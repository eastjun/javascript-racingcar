import { BUTTON_TEXT, DOM, WINNER_ALERT_TIMEOUT_AMOUNT } from '../../lib/constants.js';
import { createDivWithClassName, createElementWithId, selectDOM } from '../../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.#initDOM();
  }

  #initDOM() {
    this.inputField = selectDOM(`#${DOM.INPUT_FIELD_ID}`);
    this.gameStartBtn = selectDOM(`#${DOM.GAME_START_BTN_ID}`, this.inputField);
    this.resultField = selectDOM(`#${DOM.RESULT_FIELD_ID}`);
    this.gameProgress = selectDOM(`#${DOM.GAME_PROGRESS_ID}`, this.resultField);
    this.winners = selectDOM(`#${DOM.WINNERS_ID}`, this.resultField);
  }

  #initSpinner() {
    this.#rotateSpinner();
    this.currentDegrees = 0;
  }

  renderGameStart(cars) {
    this.#disableGameStartBtn();
    const progressTemplate = cars.map((car) => RacingCarGameView.generateProgressTemplate(car));

    this.gameProgress.append(...progressTemplate);
    this.spinners = this.gameProgress.querySelectorAll(`.${DOM.SPINNER_CLASS}`);
    this.stepContainers = this.gameProgress.querySelectorAll(`.${DOM.STEP_CONTAINER_CLASS}`);
    this.#initSpinner();
  }

  renderRoundResult(movedCars, isGameOver) {
    const stepContainersArray = Array.from(this.stepContainers);
    stepContainersArray.forEach((container) => {
      if (movedCars.includes(container.dataset.carId)) {
        container.append(RacingCarGameView.generateStepTemplate());
      }
    });
    if (isGameOver) {
      this.#removeSpinner();
    }
  }

  #removeSpinner() {
    cancelAnimationFrame(this.animationId);
    const spinnerArray = Array.from(this.spinners);
    spinnerArray.forEach((spinner) => {
      spinner.remove();
    });
  }

  renderGameResults(winnersArray) {
    this.gameStartBtn.textContent = BUTTON_TEXT.GAME_BUTTON_TEXT_FINISHED;
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winnersArray,
    });
    this.winners.append(...winnersTemplate);

    setTimeout(
      () => alert(RacingCarGameView.generateWinnerString(winnersArray)),
      WINNER_ALERT_TIMEOUT_AMOUNT
    );
  }

  renderNameInputSuccess(carNameInput, carNameBtn) {
    carNameInput.disabled = true;
    carNameBtn.disabled = true;
    carNameBtn.textContent = BUTTON_TEXT.INPUT_BUTTON_DISABLED;
    const countInputForm = selectDOM(`#${DOM.COUNT_INPUT_FORM_ID}`, this.inputField);
    countInputForm.classList.remove('hide');
  }

  renderCountInputSuccess(countInput, countBtn) {
    countInput.disabled = true;
    countBtn.disabled = true;
    countBtn.textContent = BUTTON_TEXT.INPUT_BUTTON_DISABLED;
    this.gameStartBtn.classList.remove('hide');
  }

  #disableGameStartBtn() {
    this.gameStartBtn.disabled = true;
    this.gameStartBtn.textContent = BUTTON_TEXT.GAME_BUTTON_TEXT_DURING;
  }

  #rotateSpinner = () => {
    this.spinners.forEach((spinner) => {
      spinner.style.transform = `rotate(${this.currentDegrees % 360}deg)`;
    });

    this.currentDegrees += 10;
    this.animationId = requestAnimationFrame(this.#rotateSpinner);
  };

  static generateWinnerString(winnerNames) {
    return `🎉축하합니다! 우승자는 ${winnerNames.join(',')}입니다!🎉`;
  }

  static generateProgressTemplate({ name, id }) {
    const progressElement = createDivWithClassName(DOM.CAR_PROGRESS_CLASS);
    const nameElement = createDivWithClassName(DOM.CAR_NAME_CLASS);
    nameElement.textContent = name;
    const stepContainerElement = createDivWithClassName(DOM.STEP_CONTAINER_CLASS);
    stepContainerElement.dataset.carId = id;
    progressElement.append(
      nameElement,
      stepContainerElement,
      RacingCarGameView.generateSpinnerElement()
    );
    return progressElement;
  }

  static generateSpinnerElement() {
    return createDivWithClassName(DOM.SPINNER_CLASS);
  }

  static generateStepTemplate() {
    const stepElement = document.createElement('div');
    stepElement.className = DOM.STEP_CLASS;
    stepElement.textContent = '⬇️️';
    return stepElement;
  }

  static generateWinnersTemplate({ winnersArray }) {
    const winnerContainerElement = createElementWithId({ tag: 'h2', id: DOM.WINNER_CONTAINER_ID });
    const winnerNamesElement = createElementWithId({ tag: 'span', id: DOM.WINNER_NAME_ID });
    winnerNamesElement.textContent = winnersArray.join(',');
    winnerContainerElement.append('🏆최종 승리자:', winnerNamesElement, '🏆');

    const restartButton = createElementWithId({ tag: 'button', id: DOM.RESTART_BTN_ID });
    restartButton.textContent = BUTTON_TEXT.RESTART_BUTTON;

    return [winnerContainerElement, restartButton];
  }
}
export default RacingCarGameView;
