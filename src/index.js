import { raceInit, raceManager } from "./service/raceService.js";
import { OutputView } from "./view/OutputView.js";
import { SystemMessage } from "./constants/SystemMessage.js";
import { getWinner } from "./service/statisticsService.js";

const { cars, round } = await raceInit();

OutputView.printMessage(SystemMessage.RESULT_MESSAGE);
raceManager.startRace(cars, round);

const winner = getWinner(cars);

OutputView.printMessage(SystemMessage.WINNER_MESSAGE(winner));
