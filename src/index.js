import Race from './domain/Race.js';
import Input from './view/Input.js';
import Output from './view/Output.js';

const input = new Input();
const output = new Output();

async function run() {
  const raceCarNames = await input.raceCarNames();
  const raceCount = await input.raceCount();

  const race = new Race(raceCarNames, raceCount);
  race.raceCar();
  const raceResults = race.getRaceResult();
  const winnerList = race.getWinner();

  output.printResult(raceResults, winnerList);
}

run();
