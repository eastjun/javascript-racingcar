import InputHandler from './input/InputHandler.js';
import OutputView from './views/OutputView.js';
import {
  LINE_BREAK,
  OUTPUT_MESSAGE,
  JOINT_WINNER_DELIMITER,
  POSITION,
  CAR_NAME_CONDITION,
  RANDOM_NUMBER,
} from './constants/Constants.js';
import { Race } from './domain/Race.js';
import { getRandomNumber } from './utils/getRandomNumber.js';

class App {
  async run() {
    const carList = await this.inputCarList();
    const attemptCount = await this.inputAttemptCount();
    this.printResultMessage();
    this.play(attemptCount, carList);
    this.getWinner(carList);
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

  play(attemptCount, carList) {
    for (let i = 0; i < attemptCount; i++) {
      carList.forEach((car)=>{
        Race.moveCar(getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX), car)
      })
      this.printResult(carList)
    }
  }

  printResult(carList){
    carList.forEach((car) => {
      OutputView.print(`${car.name} : ${POSITION.repeat(car.position)}`);
    });
    OutputView.print(LINE_BREAK);
  }

  getWinner(carList) {
    const winnerList = Race.getWinnerName(carList);
    OutputView.print(
      `${OUTPUT_MESSAGE.WINNER} ${winnerList.join(JOINT_WINNER_DELIMITER)}`
    );
  }
}

export default App;
