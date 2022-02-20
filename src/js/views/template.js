export default class TEMPLATE {
  static ADVANCE_MARK() {
    return '<div class="car-advance">⬇️️</div>';
  }

  static LOADING_MARK() {
    return '<div class="round-loading"><img src="./src/asset/loading.png" class="spinner" alt="loading"></div>';
  }

  static CAR_NAME_BOX(carName) {
    return `<div id="car-${carName}" class="car-instance"><div class="car-name-box">${carName}</div></div>`;
  }

  static WINNER_DISPLAY(winner) {
    return `🏆 최종 우승자: ${winner} 🏆`;
  }
}
