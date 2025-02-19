import { SystemMessage } from "../constants/SystemMessage.js";
import CarRacing from "../domain/CarRacing.js";
import { OutputView } from "../view/OutputView.js";

export function playRace(cars, round) {
  OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
  const race = new CarRacing(cars, round);
  const roundResult = race.playRace(cars);
  OutputView.printRoundResult(roundResult);

  const winner = race.getWinner(cars);
  OutputView.printWinner(winner);
}
