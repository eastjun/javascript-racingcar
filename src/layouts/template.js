export default class Template {
  static winnerTemplate(winnerList) {
    return `
        <h2 id="racing-result">
            🏆 최종 우승자: ${winnerList.join(', ')}🏆
        </h2>
        <button id="restart-button">다시 시작하기</button>
    `;
  }

  static racingProgressTemplate(cars) {
    return `
      ${cars
        .map((car) => {
          return `
          <div class="car-progress-container">
            <div class="car-progress-container--name">${car.name}</div>
            ${`<div class="car-progress-container--status">⬇️️</div>`.repeat(
              car.position
            )}
          </div>
        `;
        })
        .join('')}
    `;
  }

  static loaderTemplate() {
    return `
        <div class="loader"></div>
    `;
  }
}
