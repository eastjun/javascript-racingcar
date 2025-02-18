import Car from "../domain/Car.js";
import { InputView } from "../view/InputView.js";
import { parsingService } from "./parsingService.js";
import getValidInput from "../util/GetValidInput.js";

export async function raceInit() {
  const cars = [];

  const carNames = await getValidInput(
    InputView.getCarName,
    parsingService.parseNames
  );
  const round = await getValidInput(
    InputView.getRound,
    parsingService.parseRound
  );

  for (const carName of carNames) {
    cars.push(new Car(carName));
  }
  return { cars, round };
}
