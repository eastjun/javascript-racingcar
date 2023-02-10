const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validator = require('../Utils/Validator');
const Car = require('../Models/Car');
const Race = require('../Models/Race');

class RaceController {
  #race;

  start() {
    this.getCarName();
  }

  getCarName() {
    InputView.readCarName(carName => {
      const splitCarName = carName.split(',');
      Validator.validateNamesOfCars(splitCarName);
      const cars = [];
      splitCarName.forEach(name => {
        Validator.validateCarName(name);
        cars.push(new Car(name));
      });
      this.getTryCount(cars);
    });
  }

  getTryCount(cars) {
    InputView.readTryCount(count => {
      Validator.validateTryCount(count);
      this.#race = new Race(cars);
      this.handleRaceAndShowResult(count);
    });
  }

  handleRaceAndShowResult(count) {
    OutputView.printResultMessage();
    for (let i = 0; i < count; i += 1) {
      this.#race.go();
      OutputView.printRaceResult(this.#race.getResult());
    }
    OutputView.printWinners(this.#race.getResult());
  }
}

module.exports = RaceController;
