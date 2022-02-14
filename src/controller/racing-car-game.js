import RacingCarGameModel from '../model/racing-car-game-model.js';
import RacingCarGameView from '../view/racing-car-game-view.js';
import { $ } from '../modules/dom-selector.js';
import { checkUserCarNameInput, checkUserRacingCountInput } from '../modules/check-user-inputs.js';
import { SELECTOR } from '../constants/selector.js';

export default class RacingCarGame {
    constructor() {
        this.view = new RacingCarGameView();
        this.model = new RacingCarGameModel();
        this.addClickEventToCarNameButton();
    }

    addClickEventToCarNameButton() {
        $(SELECTOR.CAR_NAME_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onCarNameButtonClick();
        });
    }

    addClickEventToRaceCountButton() {
        $(SELECTOR.RACE_COUNT_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onRaceCountButtonClick();
        });
    }

    addClickEventToRestartButton(){
        $(SELECTOR.RESTART_BUTTON).addEventListener('click', (e) => {
            e.preventDefault();
            this.onRestartButtonClick();
        });
    }
    
    updateWholeGameResult(raceCount){
        for(let i = 0; i < raceCount; i++){
            this.model.updateCarsSuccessCount();
        }
    }

    onCarNameButtonClick() {
        try {
            checkUserCarNameInput($(SELECTOR.CAR_NAME_INPUT).value)
            this.view.renderRaceGameCountElement();
            this.addClickEventToRaceCountButton();
        } catch(err) {
            alert(err.message);
        }
    }

    onRaceCountButtonClick() {
        try {
            this.model.generateCars(checkUserCarNameInput($(SELECTOR.CAR_NAME_INPUT).value));
            this.updateWholeGameResult(checkUserRacingCountInput($(SELECTOR.RACE_COUNT_INPUT).value));
            this.view.renderWholeGameResult(this.model.carArray);
            this.addClickEventToRestartButton();
        } catch(err) {
            alert(err.message);
        }
    }

    onRestartButtonClick() {
        this.model.resetCarArray();
        this.view.resetGameView();
    }
}