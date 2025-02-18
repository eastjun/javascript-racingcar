import { raceInit } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";
import { getWinner } from "./service/statisticsService.js";
import { startRace } from "./controller/raceController.js";

const { cars, round } = await raceInit();

startRace(cars, round);

const winner = getWinner(cars);

OutputView.printWinner(winner);
