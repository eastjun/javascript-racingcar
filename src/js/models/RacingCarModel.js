import { generateRandomNumber } from "../utils/random.js";
import Car from "./Car.js";

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  setCars = (carNames) => {
    const splitedCarNames = this.splitCarNames(carNames);
    if (this.hasSpaceInName(splitedCarNames)) {
      throw new Error("공백");
    }
    if (this.isDuplicatedCarName(splitedCarNames)) {
      throw new Error("이름이 중복되었습니다");
    }
    if (this.isEmptyName(splitedCarNames)) {
      throw new Error("이름은 공백이 될수없습니다");
    }
    this.cars = splitedCarNames.map((name) => new Car(name));
    console.log(this.cars);
  };

  setRacingCount = (count) => {
    this.racingCount = count;
  };

  getRacingCount = () => {
    return this.racingCount;
  };

  playTurn = () => {
    this.cars.forEach((car) => {
      this.race(car);
    });
    return this.cars;
  };

  race = (car) => {
    if (generateRandomNumber() >= 4) {
      car.move();
    }
  };

  splitCarNames = (carNames) => carNames.split(",");

  isInValidNameLength = (names) => names.some((name) => name.length >= 5);

  hasSpaceInName = (names) =>
    names.some((name) => Array.from(name).some((ch) => ch.match(/ /)));

  isDuplicatedCarName = (names) => names.length !== new Set(names).size;

  isEmptyName = (names) => names.some((name) => name.length === 0);
}
