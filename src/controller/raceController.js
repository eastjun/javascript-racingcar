import { SystemMessage } from "../constants/SystemMessage.js";
import CarRacing from "../domain/CarRacing.js";
import { OutputView } from "../view/OutputView.js";

export function startRace(cars, round) {
  OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
  const Race = new CarRacing(cars, round);
  const roundResult = Race.playRace(cars);
  OutputView.printRoundResult(roundResult);

  const Winner = Race.getWinner(cars);
  return Winner;
}
