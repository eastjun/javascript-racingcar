import { $ } from "../utils/selector.js";
import { ID, CLASS, winnerMesssage } from "../utils/constants.js";

export default class RacingCarView {
  constructor() {
    this.result = [];
    this.$result = $(`#${ID.RESULT}`);
    this.$carNameInput = $(`#${ID.CAR_NAME_INPUT}`);
    this.$racingCountInput = $(`#${ID.RACING_COUNT_INPUT}`);
    this.$carNameButton = $(`#${ID.CAR_NAME_BUTTON}`);
    this.$racingCountButton = $(`#${ID.RACING_COUNT_BUTTON}`);
  }

  setResult = (result) => {
    this.result = result;
  };

  insertTemplate = (template) => {
    this.$result.insertAdjacentHTML("beforeend", template);
  };

  renderResult = () => {
    this.$result.innerHTML = this.makeResultTemplate();
  };

  makeResultTemplate = () => `
      <div class="${CLASS.RACING_RESULTS}">
        ${this.result
          .map(
            (result) =>
              `<div class="${CLASS.RACING_RESULT}">
                <div class="${CLASS.CAR_NAME}">${result.name}</div> 
                ${`<div class="${CLASS.ARROW}">⬇️️</div>`.repeat(
                  result.forwardCount
                )}
              </div>`
          )
          .join("")}
      </div>
      `;

  renderWinners = (winners) => {
    this.insertTemplate(this.makeWinnersTemplate(winners));
  };

  makeWinnersTemplate = (winners) => `
      <div>
        <h3 class="${CLASS.WINNERS}">${winnerMesssage(winners)}</h3>
      </div>
    `;

  renderReplayButton = () => {
    this.insertTemplate(this.makeReplayButtonTemplate());
  };

  makeReplayButtonTemplate = () => `
      <button class="${CLASS.BTN} ${CLASS.REPLAY_BTN}" id="${ID.REPLAY_BUTTON}">다시 시작하기</button>
    `;

  resetGame = () => {
    this.$result.innerHTML = "";
    this.$carNameInput.value = "";
    this.$racingCountInput.value = "";
  };

  disableElement = (...args) => {
    args.forEach((arg) => (arg.disabled = true));
  };

  enableElement = (...args) => {
    args.forEach((arg) => (arg.disabled = false));
  };

  disableCarName = () => {
    this.disableElement(this.$carNameInput, this.$carNameButton);
  };

  disableRacingCount = () => {
    this.disableElement(this.$racingCountInput, this.$racingCountButton);
  };

  enableCarName = () => {
    this.enableElement(this.$carNameInput, this.$carNameButton);
  };

  enableRacingCount = () => {
    this.enableElement(this.$racingCountInput, this.$racingCountButton);
  };
}
