import { raceInit } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";
import { startRace } from "./controller/raceController.js";

const { cars, round } = await raceInit();

const winner = startRace(cars, round);

OutputView.printWinner(winner);
