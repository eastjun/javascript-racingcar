import { InputView } from './view/InputView.js';
import { OutputView } from './view/OutputView.js';
import { startRace, raceInit } from './service/raceService.js';
import { getWinner } from './service/statisticsService.js';
import { systemMessage } from './settings/SystemMessage.js';

const { cars, round } = await raceInit(InputView);

OutputView.printMessage(systemMessage.RESULT_MESSAGE);

const carAfterRace = startRace(cars, round);

const winner = getWinner(carAfterRace);

OutputView.printWinner(winner);
