import Race from './domain/Race.js';
import InputHandler from './input/InputHandler.js';
import OutputView from './views/OutputView.js';
import {
  LINE_BREAK,
  OUTPUT_MESSAGE,
  JOINT_WINNER_DELIMITER,
  POSITION,
} from './constants/Constants.js';

class App {
  async run() {
    const carList = await this.inputCarList();
    const attemptCount = await this.inputAttemptCount();
    const race = new Race(carList);
    this.printResultMessage();
    this.play(race, attemptCount);
    this.getWinner(race);
  }

  async inputCarList() {
    return await InputHandler.getCarNameList();
  }

  async inputAttemptCount() {
    return await InputHandler.getAttemptCount();
  }

  printResultMessage(){
    OutputView.print(OUTPUT_MESSAGE.RESULT);
    OutputView.print(LINE_BREAK);
  }

  play(race, attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      const carListStatus = race.executeTurn();
      this.printResult(carListStatus)
    }
  }

  printResult(carListStatus){
    carListStatus.forEach((car) => {
      OutputView.print(`${car.name} : ${POSITION.repeat(car.position)}`);
    });
    OutputView.print(LINE_BREAK);
  }

  getWinner(race) {
    const winnerList = race.getWinnerName();
    OutputView.print(
      `${OUTPUT_MESSAGE.WINNER} ${winnerList.join(JOINT_WINNER_DELIMITER)}`
    );
  }
}

export default App;
