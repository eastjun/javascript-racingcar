import { $ } from "../dom/dom.js";
import { EMPTY_INPUT_ERROR, OVER_CARNAME_LENGTH_ERROR } from "../constants/error.js";
import initInputText from "./initInputText.js";
import showAlert from "./showAlert.js"
import { MAX_CAR_NAME_LENGTH } from '../constants/gameCondition.js';

function isCorrectCarNameLength(carNameArray){
    return !carNameArray.filter(carName => carName.length > MAX_CAR_NAME_LENGTH).length;
}

export default function checkUserCarNameInput(carNameInput) {
    if(carNameInput === ''){
        showAlert(EMPTY_INPUT_ERROR);
        return;
    }

    const carNameArray = carNameInput
        .split(',')
        .filter(carName => !!carName.trim().length);

    if(!isCorrectCarNameLength(carNameArray)){
        showAlert(OVER_CARNAME_LENGTH_ERROR);
        initInputText($('#car-name-input'));
        return;
    }

    return carNameArray;
}