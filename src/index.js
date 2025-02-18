import Race from './domain/Race.js';
import { getValidRaceCarNames, getValidRaceCount } from './view/Input.js';
import { printResult } from './view/Output.js';

async function run() {
  const raceCarNames = await getValidRaceCarNames();
  const raceCount = await getValidRaceCount();

  const race = new Race(raceCarNames, raceCount);
  race.raceCar();
  const raceResults = race.getRaceResult();
  const winnerList = race.getWinner();

  printResult(raceResults, winnerList);

}

run();
