// @ts-check

import CarManager from '../domain/CarManager.js';
import OutputView from '../views/OutputView.js';
import { readCarNames, readAttempts } from '../user/User.js';
import RaceResult from '../domain/RaceResult.js';

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
    const raceResult = new RaceResult(this.carManager?.cars);

    const winners = raceResult.determineWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
