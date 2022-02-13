import $ from '../util/dom.js';

export default function showWinners(winners) {
  $('.game-result-container').insertAdjacentHTML('beforeend', `<div class="winners-name">🏆 최종 우승자: ${[...winners]} 🏆</div>`);
}
