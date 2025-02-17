import RaceSetup from './RaceSetup.js';
import Winners from './Winners.js';
import randomNumber from '../utils/random.js';
import OutputView from '../view/Output.js';
import { MIN } from '../constant/constant.js';

class Race {
  async play() {
    const raceSetup = new RaceSetup();
    await raceSetup.initializeRace();
    this.start(raceSetup.getCarList(), raceSetup.getRaceCount());
  }

  start(carList, raceCount) {
    OutputView.printBeforeResult();
    for (let i = 0; i < raceCount; i++) {
      this.progressRace(carList);
      OutputView.printEmptyLine();
    }

    this.printWinners(carList);
  }

  progressRace(carList) {
    carList.forEach((car) => {
      const randomMoveValue = randomNumber();
      if (randomMoveValue >= MIN.MOVE_CONDITION) {
        car.moveForward();
      }

      OutputView.printRoundResult(car.getName(), car.getPosition());
    });
  }

  printWinners(carList) {
    const winners = new Winners();
    winners.determine(carList);
    OutputView.printWinners(winners.getNames());
  }
}

export default Race;
