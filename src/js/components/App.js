import CarNameInput from './CarNameInput.js';
import TryCountInput from './TryCountInput.js';
import RacingResult from './RacingResult.js';
import RacingWinner from './RacingWinner.js';
import Car from '../model/Car.js';
import {
  MIN_NUMBER,
  MAX_NUMBER,
  MOVE_BOUNDED_NUMBER,
} from '../util/constant.js';
import { getRandomNumber } from '../util/game.js';
import { $ } from '../util/dom.js';

export default class App {
  constructor() {
    this.selectDOM();
    this.initState();
    this.mountComponent();
  }

  selectDOM() {
    this.$target = $('#app');
  }

  initState() {
    this.cars = [];
    this.tryCount = 0;
  }

  mountComponent() {
    this.carNameInput = new CarNameInput({
      setCars: this.setCars.bind(this),
      playGame: this.playGame.bind(this),
    });
    this.tryCountInput = new TryCountInput({
      setTryCount: this.setTryCount.bind(this),
      playGame: this.playGame.bind(this),
    });
    this.racingResult = new RacingResult({
      $parent: this.$target,
      cars: this.cars,
    });
    this.racingWinner = new RacingWinner({
      $parent: this.$target,
      resetRacingGame: this.resetRacingGame.bind(this),
    });
  }

  setCars(carNames) {
    this.setState({ nextCars: carNames.map(name => new Car(name)) });
  }

  setTryCount(nextTryCount) {
    this.setState({ nextTryCount });
  }

  moveCars(cars) {
    const nextCars = cars.map(car => {
      getRandomNumber({ min: MIN_NUMBER, max: MAX_NUMBER }) >=
        MOVE_BOUNDED_NUMBER && car.move();

      return car;
    });

    this.setState({ nextCars });
  }

  playGame() {
    if (!this.isGameReady()) {
      return;
    }

    for (let i = 0; i < this.tryCount; i++) {
      this.moveCars(this.cars);
    }

    this.racingWinner.setState({ nextWinners: this.getWinners(this.cars) });
  }

  isGameReady() {
    return this.cars.length > 1 && this.tryCount > 0;
  }

  getWinners(cars) {
    const maxScore = Math.max(...cars.map(car => car.score));

    return cars.filter(car => car.score === maxScore).map(car => car.name);
  }

  resetRacingGame() {
    this.setState({ nextTryCount: 0, nextCars: [] });
    this.carNameInput.resetElements();
    this.tryCountInput.resetElements();
  }

  setState({ nextTryCount, nextCars }) {
    if (typeof nextTryCount === 'number') {
      this.tryCount = nextTryCount;
    }

    if (nextCars) {
      this.cars = nextCars;
      this.racingResult.setState({ nextCars });
    }
  }
}
