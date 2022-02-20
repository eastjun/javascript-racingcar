import Car from "../../model/Car.js";
import Cars from "../../model/Cars.js";
import { isValidLengthCarName } from "./checkFunctions.js";
import { SEPARATOR, EXCEPTIONS } from "../constants.js";
import {
  carNamesArea,
  carNamesInput,
  racingCountInput,
} from "../../util/elements.js";
import {
  focusElement,
  lockCarNames,
  toggleHiddenRacingCountArea,
} from "../../view/commonView.js";

export default class CarsController {
  constructor() {
    this.list = new Cars();
    this.addCarNameSubmitEvent();
  }

  makeCars(carNamesInputValue = '') {
    const carNameArr = carNamesInputValue.split(SEPARATOR);
    const cars = carNameArr.reduce((res, carName) => {
      const trimmedName = carName.trim();
      if (!isValidLengthCarName(trimmedName)) throw new Error(EXCEPTIONS.INCORRECT_CAR_NAME);
      if (res.findIndex(({ name }) => name === trimmedName) === -1) {
        res.push(new Car(trimmedName));
      }
      return res;
    }, []);
    if (cars.length < 2 || carNameArr.length !== cars.length) {
      throw new Error(EXCEPTIONS.INCORRECT_CAR_NAME);
    }
    this.list.setCars(cars);
  }

  submitFunc = e => {
    e.preventDefault();
    try {
      this.makeCars(carNamesInput.value);
    } catch (exception) {
      return alert(exception);
    }
    lockCarNames(true);
    toggleHiddenRacingCountArea();
    focusElement(racingCountInput);
  }

  addCarNameSubmitEvent() {
    carNamesArea.addEventListener("submit", this.submitFunc);
  }
}
