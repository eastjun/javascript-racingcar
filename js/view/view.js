import { $ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';
export default class View {
  constructor() {
    this.renderInitial();
  }

  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).textContent = '';
    $(SELECTOR.CAR_NAMES).insertAdjacentHTML('afterbegin', this.carNamesTemplate(carNames));
  }

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).textContent = this.winnerTemplate(winners);
  }

  makeLane(carPosition) {
    $(SELECTOR.CAR_PROGRESS).textContent = '';
    for (let i = 0; i < carPosition.length; i++) {
      $(SELECTOR.CAR_PROGRESS).insertAdjacentHTML(
        'beforeend',
        `<div id="car-progress-result-${i}"></div>`
      );
    }
  }

  moveCars(carPosition) {
    setInterval(() => {
      carPosition.forEach((position, idx) => {
        if (position > 0) {
          $(`#car-progress-result-${idx}`).innerHTML += '️️⬇️️';
          carPosition[idx] = position - 1;
        }
      });
    }, 1000);
  }

  renderProgress(carPosition) {
    this.makeLane(carPosition);
    this.moveCars(carPosition);
  }

  renderInitial() {
    $(SELECTOR.GAME_RESTART).style.display = 'none';
    $(SELECTOR.CAR_NAMES).textContent = '';
    $(SELECTOR.CAR_RACING_WINNER).textContent = '';
    $(SELECTOR.CAR_PROGRESS).textContent = '';
    $(SELECTOR.CAR_NAMES_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'none';
  }

  renderRestartButton() {
    $(SELECTOR.GAME_RESTART).style.display = 'block';
  }

  renderCarRacingInputBox() {
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'block';
  }
}
