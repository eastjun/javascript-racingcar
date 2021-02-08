import alertConstants from '../constants/alertConstants.js';
import racingConstants from '../constants/racingConstants.js';

export default class CarRacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmit = document.querySelector('#car-names-submit');
    this.$racingContainer = document.querySelector('.racing-container');
    this.$racingCountContainer = document.querySelector('.racing-count-container');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$racingCountSubmit = document.querySelector('#racing-count-submit');
    this.$resultContainer = document.querySelector('.result-container');
    this.$restartButton = document.querySelector('#restart-button');

    this.setEventListener();
  }

  onClickCarNamesSubmit() {
    const carNames = this.$carNamesInput.value.split(',').map((name) => name.trim());
    const carNamesSet = new Set(carNames);

    if (carNames.length !== carNamesSet.size) {
      return alert(alertConstants.DUPLICATE_CAR_NAME);
    }

    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > 5 || carNames[i].length <= 0) {
        return alert(alertConstants.INVALID_CAR_NAME);
      }
    }

    carNames.forEach((carName) => this.model.addCars(carName));

    this.view.removeHidden(this.$racingCountContainer);
    this.view.addDisabled(this.$carNamesSubmit);
  }

  onClickRacingCountSubmit() {
    const racingCount = this.$racingCountInput.value;

    if (racingCount <= 0 || racingCount > racingConstants.MAX_RACING_COUNT) {
      return alert(alertConstants.INVALID_RACING_COUNT);
    }

    this.model.racingCount = racingCount;

    this.view.removeHidden(this.$racingContainer);
    this.view.renderRacingCars(this.model.cars);

    this.view.addDisabled(this.$racingCountSubmit);
    this.startRacing();
  }

  onClickRestartButton() {
    this.model.init();
    this.view.addHidden(this.$racingCountContainer);
    this.view.addHidden(this.$racingContainer);
    this.view.addHidden(this.$resultContainer);
    this.view.removeDisabled(this.$carNamesSubmit);
    this.view.removeDisabled(this.$racingCountSubmit);

    this.$carNamesInput.value = '';
    this.$racingCountInput.value = '';
  }

  moveCars(cars) {
    cars.forEach((car) => {
      this.model.moveCar(car);
    });
  }

  getMovedCars() {
    const movedCars = [];
    const { START_THRESHOLD_NUMBER } = racingConstants;

    this.model.cars.forEach((car) => {
      const { name } = car;
      const randomNumber = Math.floor(Math.random() * 10);

      if (randomNumber >= START_THRESHOLD_NUMBER) {
        movedCars.push(name);
      }
    });

    return movedCars;
  }

  startRacing() {
    for (let i = 0; i < this.model.racingCount; i++) {
      const movedCars = this.getMovedCars();
      this.moveCars(movedCars);
      this.view.renderRacingRoundResult(movedCars);
    }

    this.view.removeHidden(this.$resultContainer);

    const winners = this.model.getWinners();
    this.view.renderRacingResult(winners);
  }

  setEventListener() {
    this.$carNamesSubmit.addEventListener('click', this.onClickCarNamesSubmit.bind(this));
    this.$racingCountSubmit.addEventListener('click', this.onClickRacingCountSubmit.bind(this));
    this.$restartButton.addEventListener('click', this.onClickRestartButton.bind(this));
  }
}
