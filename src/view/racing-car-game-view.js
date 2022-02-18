import { $ } from '../modules/dom-selector.js';
import { SELECTOR } from '../constants/selector.js';
import resetInputText from '../modules/reset-input-text.js';

export default class RacingCarGameView {
    winners = '';

    renderRaceGameCountElement() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.remove(SELECTOR.DISPLAY_NONE);
    }

    renderRacingContent(carArray) {
        let racingResult = '';
        carArray.forEach(car => {
            racingResult += `<div class="car">
                <label>${car.name}</label>
                <div>${this.renderOneCarContent(car.successCount, car.isCurrentTurnSuccess)}</div>
                </div>
            `;
        });
        $(SELECTOR.RACING_CONTENT).innerHTML = racingResult;
    }

    renderOneCarContent(carCount, isCurrentTurnSuccess) {
        return carCount <= 0 ? '' : this.getOneCarContent(carCount, isCurrentTurnSuccess);
    }

    getOneCarContent(carCount, isCurrentTurnSuccess) {
        let arrowResult = '';
        for(let i = 0; i < carCount - 1; i++) {
            arrowResult +='<p>⬇️</p>';
        }
        arrowResult += isCurrentTurnSuccess ? '<p class="loading-spinner"></p>' : '<p>⬇️</p>';
        return arrowResult;
    }
    
    renderGameWinners(carArray){
        const maxCount = carArray
            .map(car => car.successCount)
            .sort((a, b) => b - a)[0]; // 내림차순으로 sorting 후 0번째 값이 최대값
        this.winners = carArray
            .filter(car => car.successCount === maxCount)
            .map(car => car.name)
            .join(',');
        
        $(SELECTOR.RACING_RESULT).innerHTML = `
            <h2 class="result-text">🏆 최종 우승자: ${this.winners}🏆</h2>
            <button class="restart-button">다시 시작하기</button>
        `;
    }

    resetGameView() {
        $(SELECTOR.RACE_COUNT_INPUT_CONTAINER).classList.add(SELECTOR.DISPLAY_NONE);
        $(SELECTOR.RACING_CONTENT).innerHTML = '';
        $(SELECTOR.RACING_RESULT).innerHTML = '';
        resetInputText($(SELECTOR.RACE_COUNT_INPUT));
        resetInputText($(SELECTOR.CAR_NAME_INPUT));
    }

    renderLoadingSpinner() {

    }
}