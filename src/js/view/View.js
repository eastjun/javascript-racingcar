import { SELECTOR } from '../constants.js';
import { $, $all } from '../utils/utils.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.$racingProgress = $(SELECTOR.$RACING_PROGRESS);
    this.$$progressList = null;
  }

  get carNameButton() {
    return this.$carNameButton;
  }

  get racingCountButton() {
    return this.$racingCountButton;
  }

  get progressList() {
    return this.$$progressList;
  }

  get app() {
    return this.$app;
  }

  get racingProgress() {
    return this.$racingProgress;
  }

  get carNameInput() {
    return this.$carNameInput;
  }

  get racingCountInput() {
    return this.$racingCountInput;
  }

  winnersAlertMessage(winners) {
    setTimeout(() => {
      this.alertMessage(
        `${winners.join(',')} 자동차 경주 우승을 축하드립니다. 🎉`
      );
    }, 2000);
  }

  alertMessage(message) {
    alert(message);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  toggleDisabledButton(selector) {
    selector.disabled = !selector.disabled;
    selector.classList.toggle('disabled');
  }

  racingCountInputVisibled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).classList.remove('invisibled');
  }

  racingCountInputInvisibled() {
    $(SELECTOR.$INPUT_FORM_LAST_CHILD).classList.add('invisibled');
  }

  removeElements(parentElements, selector) {
    if (!parentElements.length) {
      parentElements.removeChild($(selector));

      return;
    }

    [...parentElements].forEach((parentElement) => {
      const childElement = $(selector);
      parentElement.removeChild(childElement);
    });
  }

  render(selector, position, template) {
    selector.insertAdjacentHTML(position, template);
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  bindClickCarNameButton(callback) {
    this.bindEventListener('click', SELECTOR.$CAR_NAME_BUTTON, callback);
  }

  bindClickRacingCountButton(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, () => {
      this.$$progressList = $all(SELECTOR.$PROGRESS_LIST);
      callback();
    });
  }

  bindClickRestartButton(callback) {
    this.bindEventListener('click', SELECTOR.$RESTART_BUTTON, callback);
  }

  init() {
    this.$racingCountInput.value = '';
    this.$carNameInput.value = '';
    this.$carNameInput.focus();
    this.racingCountInputInvisibled();

    this.removeElements(this.$app, SELECTOR.$RACING_RESULT);
    this.removeElements(this.$racingProgress, SELECTOR.$RESULT_LIST);

    this.toggleDisabledButton(this.$carNameButton);
    this.toggleDisabledButton(this.$racingCountButton);
  }
}
