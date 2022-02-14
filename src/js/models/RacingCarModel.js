import { GAME_NUMBERS, ALERT_MESSAGE } from "../utils/constants.js";
import { generateRandomNumber } from "../utils/random.js";
import Car from "./Car.js";

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
  }

  setCars = (carNames) => {
    const splitedCarNames = this.splitCarNames(carNames);
    this.checkValidCarNames(splitedCarNames);
    this.cars = splitedCarNames.map((name) => new Car(name));
  };

  checkValidCarNames = (splitedCarNames) => {
    if (this.hasSpaceInName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.HAS_EMPTY_NAME_ERROR);
    }
    if (this.isDuplicatedCarName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.DUPLICATED_NAME_ERROR);
    }
    if (this.isEmptyName(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.EMPTY_NAME_ERROR);
    }
    if (this.hasInValidNameLength(splitedCarNames)) {
      throw new Error(ALERT_MESSAGE.HAS_INVALID_NAME_LENGTH_ERROR);
    }
  };

  setRacingCount = (count) => {
    this.checkValidRacingCount(count);
    this.racingCount = count;
  };

  checkValidRacingCount = (count) => {
    if (this.isEmptyRacingCount(count)) {
      throw new Error(ALERT_MESSAGE.EMPTY_COUNT_ERROR);
    }
  };

  getRacingCount = () => this.racingCount;

  playTurn = () => {
    this.cars.forEach((car) => {
      this.race(car);
    });
    return this.cars;
  };

  race = (car) => {
    if (generateRandomNumber() >= GAME_NUMBERS.FORWARD_STANDARD_NUMBER) {
      car.move();
    }
  };

  pickWinners = () => {
    const maxCount = Math.max(...this.cars.map((car) => car.forwardCount));
    return this.cars
      .filter((car) => car.forwardCount === maxCount)
      .map((car) => car.name)
      .join(", ");
  };

  resetGameStatus = () => {
    this.cars = [];
    this.racingCount = GAME_NUMBERS.INIT_RACING_COUNT;
  };

  splitCarNames = (carNames) => carNames.split(",");

  hasInValidNameLength = (names) =>
    names.some((name) => name.length > GAME_NUMBERS.VALID_MAX_NAME_LENGTH);

  hasSpaceInName = (names) =>
    names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

  isDuplicatedCarName = (names) => names.length !== new Set(names).size;

  isEmptyName = (names) =>
    names.some((name) => name.length === GAME_NUMBERS.EMPTY_NUMBER);

  isEmptyRacingCount = (count) => !count;
}
