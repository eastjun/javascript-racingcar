import Race from './domain/Race.js';
import { getValidRaceCarNames, getValidRaceCount } from './view/Input.js';
import Output from './view/Output.js';

const output = new Output();

async function run() {
  const raceCarNames = await getValidRaceCarNames();
  const raceCount = await getValidRaceCount();

  const race = new Race(raceCarNames, raceCount);
  race.raceCar();
  const raceResults = race.getRaceResult();
  const winnerList = race.getWinner();

  output.printResult(raceResults, winnerList);
}

run();
