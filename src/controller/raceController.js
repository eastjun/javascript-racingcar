import { SystemMessage } from "../constants/SystemMessage";
import CarRacing from "../domain/CarRacing";

export function startRace(cars, round) {
  OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
  const Race = new CarRacing(cars, round);
  const roundResult = Race.playRace(cars);
  OutputView.printRound(roundResult);
}
