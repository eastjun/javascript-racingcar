import { $, $$ } from '../util-view/querySelector.js';
import { setVisibility } from '../util-view/setVisibility.js';
import { wait } from '../util-view/wait.js';
import { setToInitialView } from '../util-view/setToInitialView.js';
import { getWinners } from '../util-model/getWinners.js';
import { GAME } from '../util-model/constant.js';

export const handleGameResult = async (cars, racingCount) => {
  const { TURN_DURATION, GAME_OVER_NOTICE_DELAY } = GAME;
  let winnersStr;

  clearResidueArrow();
  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, true));
  for (let i = 0; i < racingCount; i++) {
    await wait(TURN_DURATION);
    cars.forEach((car, index) => {
      if (car.isMovingForward()) {
        car.forwardCount += 1;
        insertArrowHTML(index);
      }
    });
  }
  $$('.spinner-container').forEach((spinner) => setVisibility(spinner, false));
  winnersStr = getWinners(cars);
  insertGameResultHTML(winnersStr);
  setVisibility($('#game-result-section'), true);
  await wait(GAME_OVER_NOTICE_DELAY);
  alertGameOver(winnersStr);
};

const alertGameOver = (winners) => {
  const { GAME_OVER_NOTICE_SUFFIX } = GAME;
  alert(`${winners} ${GAME_OVER_NOTICE_SUFFIX}`);
};

const clearResidueArrow = () => {
  $$('.forward-icon').forEach(($arrow) => $arrow.remove());
};

const insertArrowHTML = (index) => {
  $$('.car-player')[index].insertAdjacentHTML('afterEnd', arrowTemplate());
};

const arrowTemplate = () => {
  return `<div class="forward-icon mt-2">⬇️️</div>`;
};

const insertGameResultHTML = (winners) => {
  $('#game-result-text').innerHTML = `🏆 최종 우승자: ${winners} 🏆`;
  $('#game-restart-button').addEventListener('click', setToInitialView);
};
