const { MOVE_SETTING } = require("../lib/Constant.js");
const GenerateRandomNumber = require("../lib/GenerateRandomNumber.js");

class Car {
  #name;
  #position = [];

  constructor(carName) {
    this.#name = carName;
  }

  move(tryCount) {
    for (let sequence = 0; sequence < tryCount; sequence++) {
      const number = GenerateRandomNumber.generator();

      this.#position.push(
        number <= MOVE_SETTING.advanceBoundary
          ? MOVE_SETTING.advance
          : MOVE_SETTING.stop
      );
    }
  }

  getStatus() {
    return { name: this.#name, position: this.#position };
  }

  static getWinner(carsStatus) {
    carsStatus = carsStatus.map(({ name, position }) => {
      return { name, position: position.reduce((acc, cur) => acc + cur, 0) };
    });

    const carsPostion = carsStatus.map(({ position }) => position);
    const maxPosition = Math.max(...carsPostion);

    return carsStatus
      .filter(({ position }) => position === maxPosition)
      .map(({ name }) => name);
  }
}

module.exports = Car;
