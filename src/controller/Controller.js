// @ts-check

import CarManager from '../domain/CarManager.js';
import OutputView from '../views/OutputView.js';
import { readCarNames, readAttempts } from '../user/User.js';
import determineWinners from '../utils/determineWinners.js';

class Controller {
  carManager;

  async process() {
    await this.initialize();
    await this.executeRace();
    this.announceWinners();
  }

  async initialize() {
    const carNames = await readCarNames();
    this.carManager = new CarManager(carNames);
  }

  async executeRace() {
    const attempts = await readAttempts();
    OutputView.printResultGreeting();

    this.carManager.executeRace(attempts, (cars) => {
      OutputView.printRaceStatus(cars);
    });
  }

  announceWinners() {
    const winners = determineWinners(this.carManager.cars);
    OutputView.printWinners(winners);
  }
}

export default Controller;
